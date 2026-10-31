import { redirect } from "next/navigation";
import { site } from "@/lib/site";

export default function IndexPage() {
  redirect(site.supportPath);
}
