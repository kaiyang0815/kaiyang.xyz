"use client";

import { useEffect, useState } from "react";

interface HitokotoResponse {
  hitokoto: string;
  from: string;
  from_who: string | null;
}

export default function RandomSentence() {
  const [sentence, setSentence] = useState<HitokotoResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSentence = async () => {
      try {
        const response = await fetch("https://v1.hitokoto.cn");
        const data = await response.json();
        setSentence(data);
      } catch (error) {
        console.error("Failed to fetch sentence:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSentence();
  }, []);

  if (loading) {
    return <p className="animate-pulse text-sm text-neutral-500">加载中...</p>;
  }

  if (!sentence) {
    return "记录开发、生活及其他的点点滴滴";
  }

  return (
    <div className="text-sm text-neutral-500">
      <p className="my-2">
        {sentence.hitokoto} —— {sentence.from}
        {sentence.from_who && ` · ${sentence.from_who}`}
      </p>
    </div>
  );
}
