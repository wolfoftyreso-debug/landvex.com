import Link from "next/link";
import { CompanyAddress } from "@/components/company-address";
import { FooterGrain } from "@/components/footer-grain";
import { footerNav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-white">
      <div className="wrap flex flex-wrap items-start justify-between gap-12 py-14 site:pt-14 site:pb-[4.5rem]">
        <div className="max-w-[42ch] text-sm leading-[1.65] text-subtle">
          <div className="mb-2.5 text-xl font-bold tracking-[-0.02em] text-ink">Landvex</div>
          <p className="m-0 mb-5">
            {site.tagline}. A development company: we build it and hand it over. US HQ:
            Houston, Texas · EU HQ: Tyresö, Sweden.
          </p>
          <CompanyAddress compact />
        </div>
        {/* Equal-width columns, so the three read as a grid rather than three
              ragged stacks. Two per row below 560px, where three would not fit. */}
          <div className="grid grid-cols-2 gap-x-10 gap-y-8 text-sm min-[560px]:grid-cols-3">
          {footerNav.map((column) => (
            <nav key={column.label} className="grid content-start gap-2.5" aria-label={column.label}>
              {column.links.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>
          ))}
        </div>
      </div>
      <div className="border-t border-line">
        <div className="wrap overflow-hidden py-6">
          <div className="text-[13px] text-subtle">
            © {site.copyrightYear} {site.name}
          </div>
          <FooterGrain />
        </div>
      </div>
    </footer>
  );
}
