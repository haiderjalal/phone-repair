"use client";
import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import Link from "next/link";

// Helper function to get excerpt
const getExcerpt = (text, length = 150) => {
  if (!text) return "";
  return text.length > length ? text.substring(0, length) + "..." : text;
};

// ✅ New helper: always build image URLs via /api/media
const getImageUrl = (imageField) => {
  if (!imageField) return null;

  let filename = null;

  if (typeof imageField === "string") {
    filename = imageField.split("/").pop(); // extract filename
  } else if (imageField.filename) {
    filename = imageField.filename;
  } else if (imageField.url) {
    filename = imageField.url.split("/").pop();
  } else if (imageField.src) {
    filename = imageField.src.split("/").pop();
  }

  return filename ? `/api/media?file=${filename}` : null;
};

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBlogs();
  }, [currentPage]);

  const fetchBlogs = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/blog");
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

      const data = await response.json();

      let blogsArray = [];
      if (Array.isArray(data)) blogsArray = data;
      else if (data.docs && Array.isArray(data.docs)) blogsArray = data.docs;
      else if (data.blogs && Array.isArray(data.blogs)) blogsArray = data.blogs;
      else if (data.data && Array.isArray(data.data)) blogsArray = data.data;
      else {
        console.error("Unexpected data structure:", data);
        setError("Invalid blog data format received.");
        setBlogs([]);
        setTotalPages(0);
        return;
      }

      const blogsPerPage = 9;
      const startIndex = (currentPage - 1) * blogsPerPage;
      const endIndex = startIndex + blogsPerPage;
      const paginatedBlogs = blogsArray.slice(startIndex, endIndex);

      setBlogs(paginatedBlogs);
      setTotalPages(Math.ceil(blogsArray.length / blogsPerPage));
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setError("An error occurred while loading blogs. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Layout headerStyle={3} footerStyle={3} breadcrumbTitle="Blog">
      <section className="blog-page">
        <div className="container">
          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : (
            <>
              <div className="row">
                {error ? (
                  <div className="col-12 text-center py-5">
                    <div className="alert alert-warning" role="alert">
                      <h4 className="alert-heading">
                        Service Temporarily Unavailable
                      </h4>
                      <p>{error}</p>
                      <hr />
                      <button
                        className="btn btn-primary"
                        onClick={() => fetchBlogs()}
                      >
                        Try Again
                      </button>
                    </div>
                  </div>
                ) : blogs.length > 0 ? (
                  blogs.map((blog, index) => {
                    const publishedDate = new Date(
                      blog.createdAt || blog.updatedAt
                    );
                    const day = publishedDate.getDate();
                    const month = publishedDate.toLocaleDateString("en-US", {
                      month: "short",
                    });

                    // ✅ Use proxy image
                    const imageUrl =
                      getImageUrl(blog.featuredImage) ||
                      getImageUrl(blog.image) ||
                      getImageUrl(blog.thumbnail) ||
                      "assets/images/blog/blog-1-1.jpg";

                    return (
                      <div
                        key={blog._id || blog.id || index}
                        className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                        data-wow-delay={`${((index % 3) + 1) * 100}ms`}
                      >
                        <div className="blog-one__single">
                          <div className="blog-one__img-box">
                            <div className="blog-one__img">
                              <img
                                src={imageUrl}
                                alt={blog.title}
                                onError={(e) => {
                                  e.target.src =
                                    "assets/images/blog/blog-1-1.jpg";
                                }}
                              />
                              <Link
                                href={`/blog-details?slug=${
                                  blog.slug || blog._id
                                }`}
                                className="blog-one__link"
                              >
                                <span className="sr-only">{blog.title}</span>
                              </Link>
                            </div>
                            <div className="blog-one__date">
                              <p>
                                {day}
                                <br />
                                {month}
                              </p>
                            </div>
                          </div>
                          <div className="blog-one__content">
                            <div className="blog-one__user">
                              <p>
                                <span className="icon-user"></span>By{" "}
                                {blog.author?.name ||
                                  blog.author ||
                                  "Admin"}
                              </p>
                            </div>
                            <h3 className="blog-one__title">
                              <Link
                                href={`/blog-details?slug=${
                                  blog.slug || blog._id
                                }`}
                              >
                                {blog.title}
                              </Link>
                            </h3>
                            {(blog.excerpt || blog.description) && (
                              <p className="blog-one__text">
                                {blog.excerpt ||
                                  blog.description?.substring(0, 100) + "..."}
                              </p>
                            )}
                            <Link
                              href={`/blog-details?slug=${
                                blog.slug || blog._id
                              }`}
                              className="blog-one__learn-more"
                            >
                              Learn More
                              <span className="icon-arrow-right"></span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="col-12 text-center py-5">
                    <h3>No blogs found</h3>
                    <p>Check back later for new content!</p>
                  </div>
                )}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="row">
                  <div className="col-12">
                    <div className="blog-page__pagination text-center mt-5">
                      <nav aria-label="Blog pagination">
                        <ul className="pagination justify-content-center">
                          {currentPage > 1 && (
                            <li className="page-item">
                              <button
                                className="page-link"
                                onClick={() =>
                                  handlePageChange(currentPage - 1)
                                }
                              >
                                Previous
                              </button>
                            </li>
                          )}

                          {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                            (page) => (
                              <li
                                key={page}
                                className={`page-item ${
                                  currentPage === page ? "active" : ""
                                }`}
                              >
                                <button
                                  className="page-link"
                                  onClick={() => handlePageChange(page)}
                                >
                                  {page}
                                </button>
                              </li>
                            )
                          )}

                          {currentPage < totalPages && (
                            <li className="page-item">
                              <button
                                className="page-link"
                                onClick={() =>
                                  handlePageChange(currentPage + 1)
                                }
                              >
                                Next
                              </button>
                            </li>
                          )}
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* CTA One */}
      <section className="cta-one">
        <div className="container">
          <div className="cta-one__inner">
            <div className="cta-one__img">
              <img
                src="assets/images/resources/cta.jpg"
                alt=""
                width={610}
                height={522}
              />
            </div>
            <div className="section-title text-left">
              <div className="section-title__tagline-box">
                <span className="section-title__tagline">Get To Know Us</span>
              </div>
              <div className="section-title__title-box sec-title-animation animation-style2">
                <h2 className="section-title__title title-animation">
                  Expert Phone Repair
                  <br /> Services Available
                </h2>
              </div>
            </div>
            <p className="cta-one__text">
              Get your phone repaired by certified technicians using genuine
              parts
              <br />
              Fast, reliable service with warranty on all repairs
            </p>
            <div className="cta-one__btn-and-call-box">
              <div className="cta-one__btn-box">
                <a
                  href="https://wa.me/923556172662?text=Hello!%20I%20would%20like%20to%20book%20an%20appointment."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-one__btn thm-btn"
                >
                  Get Appointment
                </a>
              </div>
              <div className="cta-one__call-box">
                <div className="icon">
                  <span className="icon-call"></span>
                </div>
                <div className="content">
                  <p>Make a call</p>
                  <h4>
                    <Link href="tel:+61249578574">+61 2 4957 8574</Link>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
