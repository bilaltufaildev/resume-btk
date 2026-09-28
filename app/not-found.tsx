import { NotFoundState } from "@/components/feedback/not-found-state";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <NotFoundState />
      <SiteFooter />
    </>
  );
}
