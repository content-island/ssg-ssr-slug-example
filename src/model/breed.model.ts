import type { Media } from "@content-island/api-client";

export interface Breed {
  id: string;
  language: "en";
  lastUpdate: string; // Stores the date in ISO 8601 format. For example: 2021-09-10T19:30:00.000Z
  name: string;
  slug: string;
  photo: Media;
  description: string;
}
