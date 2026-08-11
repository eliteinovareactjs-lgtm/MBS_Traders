import { Eye, MessageSquare, Heart, MoreVertical } from "lucide-react";
import { products } from "../data/siteData";

export default function Products() {
  return (
    <section id="products" className="w-full bg-[#aeb594] px-5 sm:px-6 md:px-[60px] pt-16 md:pt-[70px] pb-16 md:pb-24 font-body">
      {/* ===================================================== SECTION TITLE ====================================================== */}
      <div className="text-center mb-12 md:mb-14">
        <h2 className="font-heading text-[#292929] font-bold text-[30px] sm:text-[34px] md:text-[38px] leading-tight">
          Our Products
        </h2>
        <div className="w-[60px] md:w-[60px] h-[3px] bg-[#20a957] mx-auto mt-3 rounded-full" />
      </div>

      {/* ===================================================== PRODUCTS GRID ====================================================== */}
      <div className="w-full max-w-[1160px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
        {products.map((product) => (
          <article
            key={product.id}
            className="group bg-[#f3fbdc] rounded-[6px] overflow-hidden shadow-[0_8px_20px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_28px_rgba(0,0,0,0.18)]"
          >
            {/* ================================================= PRODUCT IMAGE ================================================== */}
            <div className="w-full h-[180px] overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>

            {/* ================================================= CARD CONTENT ================================================== */}
            <div className="px-4 md:px-4 pt-4 pb-5 min-h-[180px] flex flex-col">
              {/* Meta */}
              <div className="text-[12px] md:text-[12.5px] text-[#68745d] mb-2">
                Admin • Aug 1, 2025 • {product.readTime}
              </div>

              {/* Title */}
              <h3 className="font-heading text-[17px] md:text-[18px] font-semibold text-[#20833a] mb-1.5 leading-tight">
                {product.title}
              </h3>

              {/* Description */}
              <p className="text-[14px] md:text-[14.5px] text-[#4c5948] leading-[1.65] mb-4">
                {product.desc}
              </p>

              {/* ================================================= BOTTOM STATS ================================================== */}
              <div className="mt-auto flex items-center gap-4 text-[12px] md:text-[13px] text-[#5d6758]">
                {/* Views */}
                <span className="flex items-center gap-1.5">
                  <Eye size={15} strokeWidth={1.7} />
                  {product.views}
                </span>

                {/* Comments */}
                <span className="flex items-center gap-1.5">
                  <MessageSquare size={15} strokeWidth={1.7} />
                  {product.comments}
                </span>

                {/* Likes */}
                <span className="flex items-center gap-1.5">
                  <Heart size={15} strokeWidth={1.7} />
                  {product.likes}
                </span>

                {/* More */}
                <button
                  type="button"
                  aria-label={`More options for ${product.title}`}
                  className="ml-auto p-1 text-[#7a836f] hover:text-[#30382c] transition-colors"
                >
                  <MoreVertical size={16} strokeWidth={1.7} />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}