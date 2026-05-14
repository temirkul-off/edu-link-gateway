interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
}

export function PageHero({ eyebrow, title, description }: Props) {
  return (
    <section className="gradient-soft border-b border-border">
      <div className="container-x py-16 sm:py-20 max-w-3xl">
        {eyebrow && (
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary bg-primary-soft rounded-full px-3 py-1">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-foreground">{title}</h1>
        {description && <p className="mt-4 text-lg text-muted-foreground">{description}</p>}
      </div>
    </section>
  );
}
