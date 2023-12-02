import HeaderTitle from "@src/components/Headers/HeaderTitle";
import TrandingOffer from "./TrandingOffer";

import { DataTrandingItems } from "@helpers/DataTrandingItems";
import TrandingItemCard from "@src/cards/TrandingItemCard";
import TrandingItemCardV2 from "@src/cards/TrandingItemCardV2";

function TrandingProduct() {
  return (
    <div className="padding_div">
      <HeaderTitle title="Tranding Products" />
      <div className="lg:flex md:block mt-4 w-full">
        <div className="lg:max-w-[30%] md:flex md:self-center md:justify-center">
          <TrandingOffer />
        </div>
        <div className="grid md:grid-cols-2 lg:gap-1 xl:ml-2 lg:max-w-[70%]">
          {DataTrandingItems.map((item, index) => (
            <div key={index} className="">
              <TrandingItemCardV2
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
    </div>
  );
}

export default TrandingProduct;
