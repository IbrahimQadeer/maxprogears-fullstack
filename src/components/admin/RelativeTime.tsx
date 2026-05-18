"use client";

import { useEffect, useState } from "react";

type RelativeTimeProps = {
  date?: string | null;
};

function formatRelativeTime(date: string | null | undefined) {
  if (!date) {
    return "N/A";
  }

  const timestamp = new Date(date).getTime();

  if (Number.isNaN(timestamp)) {
    return "N/A";
  }

  const seconds = Math.max(0, Math.floor((Date.now() - timestamp) / 1000));
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (seconds < 60) {
    return "Just now";
  }

  if (minutes < 60) {
    return `${minutes}m ago`;
  }

  if (hours < 24) {
    return `${hours}h ago`;
  }

  if (days === 1) {
    return "Yesterday";
  }

  return `${days} days ago`;
}

export function RelativeTime({ date }: RelativeTimeProps) {
  const [label, setLabel] = useState("N/A");

  useEffect(() => {
    setLabel(formatRelativeTime(date));
  }, [date]);

  return <>{label}</>;
}
