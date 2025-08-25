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
      "https://cms-backend-v26v.onrender.com/api/media?limit=100"
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch media list: ${response.status}`);
    }

    const data = await response.json();

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
      `https://cms-backend-v26v.onrender.com${mediaInfo.url}`
    );

    if (!cmsResponse.ok) {
      throw new Error(`Failed to fetch file: ${cmsResponse.status}`);
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
