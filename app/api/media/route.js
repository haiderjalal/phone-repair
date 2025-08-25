import { NextResponse } from "next/server";

// Cache for filename to ID mapping
let mediaCache = null;
let cacheTimestamp = null;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

async function getMediaMapping() {
  const now = Date.now();

  if (mediaCache && cacheTimestamp && now - cacheTimestamp < CACHE_DURATION) {
    return mediaCache;
  }

  try {
    const response = await fetch(
      "https://lambton-backend.vercel.app/api/graphql",
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
            query {
              allMedia {
                docs {
                  id
                  filename
                  url
                }
              }
            }
          `
        })
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch media list: ${response.status}`);
    }

    const result = await response.json();
    
    if (result.errors) {
      throw new Error(`GraphQL error: ${result.errors[0].message}`);
    }
    
    const data = { docs: result.data.allMedia.docs };

    const mapping = {};
    if (data.docs && Array.isArray(data.docs)) {
      data.docs.forEach((media) => {
        if (media.filename && media.id && media.url) {
          mapping[media.filename] = {
            id: media.id,
            url: media.url, // ✅ real URL from Payload
            mimeType: media.mimeType || "image/jpeg",
          };
        }
      });
    }

    mediaCache = mapping;
    cacheTimestamp = now;

    return mapping;
  } catch (error) {
    console.error("Error fetching media mapping:", error);
    return mediaCache || {};
  }
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const filePath = searchParams.get("file");

    if (!filePath) {
      return NextResponse.json({ error: "File path is required" }, { status: 400 });
    }

    const mediaMapping = await getMediaMapping();
    const mediaInfo = mediaMapping[filePath];

    if (!mediaInfo) {
      return NextResponse.json({ error: "Media file not found" }, { status: 404 });
    }

    // ✅ Fetch actual file from Payload CMS
    const cmsResponse = await fetch(
      `https://lambton-backend.vercel.app${mediaInfo.url}`
    );

    if (!cmsResponse.ok) {
      console.warn(`Backend media file not accessible: ${cmsResponse.status} for ${mediaInfo.url}`);
      // Return a simple SVG placeholder instead of fetching from external service
      const placeholderSvg = `<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="#f0f0f0"/>
        <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="24" fill="#666666" text-anchor="middle" dy=".3em">Image Not Available</text>
      </svg>`;
      
      return new NextResponse(placeholderSvg, {
        headers: {
          "Content-Type": "image/svg+xml",
          "Cache-Control": "public, max-age=300", // Shorter cache for placeholders
        },
      });
    }

    const buffer = await cmsResponse.arrayBuffer();

    return new NextResponse(buffer, {
      headers: {
        "Content-Type": mediaInfo.mimeType,
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch (error) {
    console.error("Media proxy error:", error);
    return NextResponse.json(
      { error: "Failed to fetch media file", details: error.message },
      { status: 500 }
    );
  }
}
