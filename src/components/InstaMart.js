import { useState } from "react";

const Section = ({ title, description, isVisble, setIsVisiable }) => {
  return (
    <div className="border border-black p-2 m-2">
      <h3 className="text-2xl font-bold">{title}</h3>
      {!isVisble ? (
        <button
          className="cursor-pointer underline"
          onClick={() => setIsVisiable(true)}
        >
          show
        </button>
      ) : (
        <button
          className="cursor-pointer underline"
          onClick={() => setIsVisiable(false)}
        >
          hide
        </button>
      )}

      {isVisble && <p>{description}</p>}
    </div>
  );
};

const InstaMart = () => {
  const [isshowConfig, setIsShowConfig] = useState("about");

  return (
    <div>
      <h1 className="text-3xl font-bold">InstaMart</h1>
      <Section
        title={"AboutUs"}
        description={
          "Shop from a wide selection of 2 Lakh+ styles, 5500+ brands. Latest trends. 30 days returns. Browse & Discover Thousands of products. Read Customer Reviews and Find Best Sellers. Low Prices. No Cost EMI Available. Great Offers. Best Deals. Top Brands."
        }
        isVisble={isshowConfig === "about"}
        setIsVisiable={() => {
          setIsShowConfig(isshowConfig === "about" ? "" : "about");
        }}
      />
      <Section
        title={"Instha"}
        description={
          "Shop from a wide selection of 2 Lakh+ styles, 5500+ brands. Latest trends. 30 days returns. Browse & Discover Thousands of products. Read Customer Reviews and Find Best Sellers. Low Prices. No Cost EMI Available. Great Offers. Best Deals. Top Brands."
        }
        isVisble={isshowConfig === "instha"}
        setIsVisiable={() => {
          setIsShowConfig(isshowConfig === "instha" ? "" : "instha");
        }}
      />
      <Section
        title={"Caree"}
        description={
          "Shop from a wide selection of 2 Lakh+ styles, 5500+ brands. Latest trends. 30 days returns. Browse & Discover Thousands of products. Read Customer Reviews and Find Best Sellers. Low Prices. No Cost EMI Available. Great Offers. Best Deals. Top Brands."
        }
        isVisble={isshowConfig === "career"}
        setIsVisiable={() => {
          setIsShowConfig(isshowConfig === "career" ? "" : "career");
        }}
      />
    </div>
  );
};
export default InstaMart;
