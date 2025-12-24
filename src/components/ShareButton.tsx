"use client";

import React from "react";
import { Share2 } from "lucide-react";

export default function ShareButton({ title }: { title: string }) {
    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: title,
                url: window.location.href,
            }).catch((err) => console.error("Error sharing:", err));
        } else {
            navigator.clipboard.writeText(window.location.href);
            alert("Link copied to clipboard!");
        }
    };

    return (
        <button
            onClick={handleShare}
            className="flex items-center gap-2 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full transition-colors text-sm font-tech cursor-pointer"
        >
            <Share2 size={16} />
            Share Article
        </button>
    );
}
