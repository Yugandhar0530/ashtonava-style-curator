import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CollectionTileProps {
  title: string;
  subtitle: string;
  image: string;
  href: string;
}

const CollectionTile = ({ title, subtitle, image, href }: CollectionTileProps) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-gradient-subtle hover:shadow-premium transition-all duration-300 hover:-translate-y-1">
      <div className="aspect-[4/5] overflow-hidden">
        <img 
          src={image} 
          alt={`${title} Collection`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-plum/80 via-transparent to-transparent" />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 text-pure-white">
        <h3 className="font-display text-2xl font-semibold mb-2">
          {title}
        </h3>
        <p className="font-body text-sm mb-4 text-pure-white/90">
          {subtitle}
        </p>
        <Button 
          variant="premium-primary" 
          size="sm"
          className="group-hover:shadow-premium group-hover:-translate-y-0.5"
        >
          Explore
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
};

export default CollectionTile;