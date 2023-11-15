import HeaderTitle from "@src/components/Headers/HeaderTitle";
import TrandingOffer from "../Tranding/TrandingOffer";

import { DataTrandingItems } from "@helpers/DataTrandingItems";
import ItemCard from "@src/cards/ItemCard";

function FeaturedProduct() {
  return (
    <div className="padding_div">
      <HeaderTitle title="Featured Products" showLeft />
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-3">
        {DataTrandingItems.map((item, index) => (
          <div key={index} className="">
            <ItemCard
              URL={item?.image}
              key={index}
              title={item.title}
              discount={item.discount}
              currentPrice={item?.currentPrice}
              normalPrice={item?.normalPrice}
              sold={item?.sold}
              freeShipping={item?.freeShipping}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedProduct;
