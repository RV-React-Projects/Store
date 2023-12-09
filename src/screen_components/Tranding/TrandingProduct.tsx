import HeaderTitle from "@src/components/Headers/HeaderTitle";
import TrandingOffer from "@screen_components/Tranding/TrandingOffer";
import { DataTrandingItems } from "@helpers/DataTrandingItems";
import TrandingItemCardV2 from "@src/cards/TrandingItemCardV2";
import { useNavigate } from "react-router-dom";
import toString from "lodash/toString";

function TrandingProduct() {
  const navigate = useNavigate();

  const onPressItem = (id: string) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="padding_div">
      <HeaderTitle title="Tranding Products" />
      <div className="lg:flex md:block mt-4 w-full">
        <div className="lg:max-w-[30%] flex self-center justify-center pb-10 lg:pb-0">
          <TrandingOffer onPressItem={onPressItem} id={"11223232"} />
        </div>
        <div className="grid md:grid-cols-2 lg:gap-1 xl:ml-2 lg:max-w-[70%]">
          {DataTrandingItems.map((item, index) => (
            <div key={index} className="">
              <TrandingItemCardV2
                URL={item?.image}
                key={index}
                id={toString(index)}
                title={item.title}
                discount={item.discount}
                currentPrice={item?.currentPrice}
                normalPrice={item?.normalPrice}
                sold={item?.sold}
                freeShipping={item?.freeShipping}
                onPressItem={onPressItem}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrandingProduct;
