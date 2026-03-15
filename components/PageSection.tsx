import Link from "next/link";

type Props = {
  title: string;
  breadcrumb?: { label: string; href?: string }[];
  children: React.ReactNode;
  className?: string;
};

export default function PageSection({ title, breadcrumb, children, className = "" }: Props) {
  return (
    <section className={`max-w-4xl mx-auto px-4 py-10 ${className}`}>
      {breadcrumb && breadcrumb.length > 0 && (
        <nav className="text-sm text-stone-500 mb-4" aria-label="Breadcrumb">
          {breadcrumb.map((item, i) => (
            <span key={i}>
              {item.href ? (
                <Link href={item.href} className="hover:text-institucional-azul">
                  {item.label}
                </Link>
              ) : (
                <span className="text-stone-700">{item.label}</span>
              )}
              {i < breadcrumb.length - 1 && <span className="mx-2">/</span>}
            </span>
          ))}
        </nav>
      )}
      <h1 className="text-2xl md:text-3xl font-bold text-institucional-azul border-b border-institucional-azul/20 pb-3 mb-6">
        {title}
      </h1>
      <div className="prose-institucional">{children}</div>
    </section>
  );
}
