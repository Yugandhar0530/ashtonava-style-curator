interface BreadcrumbProps {
  items: { label: string; href?: string }[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav className="flex items-center space-x-2 text-sm font-body mb-8">
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          {item.href ? (
            <a
              href={item.href}
              className="text-rich-burgundy hover:text-deep-charcoal transition-colors"
            >
              {item.label}
            </a>
          ) : (
            <span className="text-deep-charcoal font-medium">{item.label}</span>
          )}
          {index < items.length - 1 && (
            <span className="mx-2 text-rich-burgundy">|</span>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumb;