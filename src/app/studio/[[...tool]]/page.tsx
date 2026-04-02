// SANITY STUDIO — NOT ACTIVE
// This route will mount the Sanity Studio when CMS is wired up.
// For now, redirect to home.
import { redirect } from "next/navigation";
export default function StudioPage() {
  redirect("/");
}
