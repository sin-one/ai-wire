'use client';

import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function AINewsDashboard() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('/api/ai-news');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        setArticles(data?.articles || []);
      } catch (err: any) {
        console.error("Error fetching AI news:", err);
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return (
    <>
      {loading && (
        <p className="text-center text-gray-500 text-sm">Loading articles...</p>
      )}

      {error && (
        <p className="text-center text-red-600 font-medium">Error: {error}</p>
      )}

      {!loading && !error && articles.length === 0 && (
        <p className="text-center text-gray-500">No trending AI articles found.</p>
      )}

      {!loading && !error && articles.length > 0 && (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((story: Record<string, any>, index: number) => (
            <Card
              key={index}
              className="group rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-200 flex flex-col"
            >
              <div className="relative w-full pt-[56.25%] bg-gray-100">
                {story.image_link ? (
                  <img
                    src={story.image_link}
                    alt={story.headline}
                    className="absolute top-0 left-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                  />
                ) : (
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-sm text-gray-400">
                    No image
                  </div>
                )}
              </div>

              <CardContent className="p-5 flex flex-col flex-grow">
                <a
                  href={story.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  <h2 className="text-base font-semibold text-gray-900 group-hover:text-blue-600 leading-snug mb-2 line-clamp-3">
                    {story.headline}
                  </h2>
                </a>

                <div className="text-xs text-gray-500 mb-3">
                  {story.source?.publisher || "Unknown Source"} &middot;{" "}
                  {story.publication_timestamp
                    ? new Date(story.publication_timestamp).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })
                    : "Unknown date"}
                </div>

                <div className="mt-auto text-xs text-blue-600 font-medium">
                  👍 {story.fb_data?.total_engagement_count?.toLocaleString() || 0} Facebook interactions
                </div>
              </CardContent>
            </Card>
          ))}
        </section>
      )}
    </>
  );
}
