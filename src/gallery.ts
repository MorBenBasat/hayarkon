export type GalleryCategory = "all" | "outdoor" | "living" | "interior";

export type Frame = {
  src: string;
  layout: "feature" | "tall" | "wide" | "std";
  category: "outdoor" | "living" | "interior";
};

export const frames: Frame[] = [
  { src: "/media/living-sea.jpg", layout: "feature", category: "living" },
  { src: "/media/pool.jpg", layout: "tall", category: "outdoor" },
  { src: "/media/terrace-sea.jpg", layout: "wide", category: "outdoor" },
  { src: "/media/lobby.jpg", layout: "std", category: "interior" },
  { src: "/media/kitchen.jpg", layout: "std", category: "interior" },
  { src: "/media/terrace-evening.jpg", layout: "wide", category: "outdoor" },
  { src: "/media/living-marble.jpg", layout: "std", category: "living" },
  { src: "/media/sea-loungers.jpg", layout: "std", category: "outdoor" },
  { src: "/media/terrace-dining.jpg", layout: "std", category: "outdoor" },
  { src: "/media/living-sea-tv.jpg", layout: "std", category: "living" },
  { src: "/media/pool-sky.jpg", layout: "tall", category: "outdoor" },
  { src: "/media/terrace-chairs.jpg", layout: "std", category: "outdoor" },
];

export const residenceIds = ["garden", "one", "two", "three", "four"] as const;

export const residenceImages = [
  "/media/living-city.jpg",
  "/media/living-marble-long.jpg",
  "/media/kitchen.jpg",
  "/media/living-sea.jpg",
  "/media/terrace-loungers.jpg",
] as const;

