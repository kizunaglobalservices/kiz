import { tinaField, useTina } from "tinacms/dist/react";
import type { PageQuery, PageQueryVariables } from "../__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";

type Props = {
  variables: PageQueryVariables;
  data: PageQuery;
  query: string;
};

const HomePage = (props: Props) => {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const page = data.page;

  if (!page) {
    return <div className="p-20 text-center">Loading page data...</div>;
  }

  const isTina = typeof window !== "undefined" && window.self !== window.top;

  return (
    <div className={`text-navy antialiased ${isTina ? "tina-preview" : ""}`}>
      {/* Hero Section */}
      <section
        className="relative h-[85vh] flex items-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${
            page.hero?.backgroundImage ||
            "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80"
          })`,
        }}
        data-tina-field={tinaField(page.hero, "backgroundImage")}
      >
        <div className="absolute inset-0 hero-overlay"></div>
        <div className="container mx-auto px-6 relative z-10 text-white text-center md:text-left">
          <div className="max-w-4xl">
            <h2
              className="text-gold font-bold tracking-[0.4em] uppercase mb-4 text-sm flex items-center justify-center md:justify-start"
              data-tina-field={tinaField(page.hero, "tagline")}
            >
              {page.hero?.tagline}
            </h2>
            <h1
              className="text-4xl md:text-7xl font-serif font-bold mb-6 leading-tight"
              data-tina-field={tinaField(page.hero, "title")}
              dangerouslySetInnerHTML={{ __html: page.hero?.title || "" }}
            ></h1>
            <p
              className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed font-light max-w-2xl"
              data-tina-field={tinaField(page.hero, "description")}
            >
              {page.hero?.description}
            </p>
            <div className="flex flex-col sm:space-y-0 sm:space-x-6 justify-center md:justify-start">
              <a
                href={page.hero?.buttonLink || "#"}
                className="bg-gold text-navy px-10 py-4 font-bold uppercase tracking-widest text-xs hover:bg-gold-light transition-all shadow-xl inline-block w-fit mx-auto md:mx-0"
                data-tina-field={tinaField(page.hero, "buttonText")}
              >
                {page.hero?.buttonText}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <div className="bg-navy border-y border-gold/20">
        <div className="container mx-auto px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-gold/30">
            {page.stats?.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center text-center px-4 py-4 md:py-0"
                data-tina-field={tinaField(stat)}
              >
                <span className="text-4xl md:text-5xl font-serif font-bold text-gold mb-2">
                  {stat?.value}
                </span>
                <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-slate-400">
                  {stat?.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* WHAT WE DO SECTION */}
      <section className="bg-white overflow-hidden relative">
        <div className="container mx-auto px-6 py-20 relative">
          {/* Background Watermark */}
          <div className="absolute -right-20 top-20 pointer-events-none opacity-[0.03] select-none">
            <span className="kanji-bg text-[40rem] text-navy">絆</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10 reveal-from-left">
            <div>
              <h2
                className="text-gold font-bold tracking-widest uppercase text-xs mb-4"
                data-tina-field={tinaField(page.whatWeDo, "tagline")}
              >
                {page.whatWeDo?.tagline}
              </h2>
              <h3
                className="text-3xl md:text-4xl font-serif font-bold text-navy mb-8"
                data-tina-field={tinaField(page.whatWeDo, "title")}
                dangerouslySetInnerHTML={{ __html: page.whatWeDo?.title || "" }}
              ></h3>

              <div className="space-y-6">
                {page.whatWeDo?.services?.map((service, i) => (
                  <div
                    key={i}
                    className="flex items-start space-x-4 group cursor-pointer"
                    data-tina-field={tinaField(service)}
                  >
                    <div className="mt-1 text-gold group-hover:scale-110 transition-transform">
                      <i className="fas fa-check-circle"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-navy uppercase text-xs tracking-wider mb-1">
                        {service?.title}
                      </h4>
                      <p className="text-slate-500 text-sm">
                        {service?.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="/services"
                className="mt-10 inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-navy border-b-2 border-gold pb-1 hover:text-gold transition-colors"
              >
                View Detailed Services{" "}
                <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>

            {/* CTA Box */}
            <div className="cta-pattern p-8 md:p-12 shadow-2xl relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gold opacity-10"></div>
              <div className="relative z-10 text-white">
                <h3
                  className="text-2xl font-serif font-bold mb-4"
                  data-tina-field={tinaField(page.whatWeDo, "ctaTitle")}
                >
                  {page.whatWeDo?.ctaTitle}
                </h3>
                <p
                  className="text-slate-400 text-sm mb-8 leading-relaxed"
                  data-tina-field={tinaField(page.whatWeDo, "ctaDescription")}
                >
                  {page.whatWeDo?.ctaDescription}
                </p>
                <div className="bg-navy/50 p-6 border-l-2 border-gold mb-8">
                  <p
                    className="text-xs text-gold uppercase tracking-widest font-bold mb-2"
                    data-tina-field={tinaField(
                      page.whatWeDo,
                      "ctaPhilosophyTitle",
                    )}
                  >
                    {page.whatWeDo?.ctaPhilosophyTitle}
                  </p>
                  <p
                    className="text-white text-sm italic"
                    data-tina-field={tinaField(
                      page.whatWeDo,
                      "ctaPhilosophyText",
                    )}
                  >
                    {page.whatWeDo?.ctaPhilosophyText}
                  </p>
                </div>
                <a
                  href={page.whatWeDo?.ctaButtonLink || "#"}
                  className="block w-full text-center bg-gold text-navy py-4 font-bold uppercase tracking-widest text-xs hover:bg-gold-light transition-all shadow-lg"
                  data-tina-field={tinaField(page.whatWeDo, "ctaButtonText")}
                >
                  {page.whatWeDo?.ctaButtonText}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ADDITIONAL CONTENT (Managed via Body) */}
      <section
        className="bg-[#fcfcfc] py-20 overflow-hidden relative"
        data-tina-field={tinaField(page, "body")}
      >
        <div className="container mx-auto px-6 prose prose-slate max-w-none">
          <TinaMarkdown content={page.body} />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
