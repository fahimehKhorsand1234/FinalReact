import React from "react";
import GradeIcon from "@mui/icons-material/Grade";
import EnhancedTable from "../productscComponents/ProductPage/TableProductPage";
import HeaderNavProduct from "../productscComponents/ProductPage/HeaderNavProduct";
import SliderProductPage from "../productscComponents/ProductPage/SliderProductPage";
import sofa1 from "../imges/sofa1.png";
import flower from "../imges/flower.png";
import sofa2 from "../imges/sofa2.png";
import flower2 from "../imges/flower2.png";
import Editimg from "../imges/EditProduct.png";
import SelectBig1 from "../productscComponents/ProductPage/SelectBig1";
import SelectSmall from "../productscComponents/ProductPage/SelectSmall";

export default function Productpage() {
  const images = [
    {
      imageurl: Editimg,
    },
    {
      imageurl: flower2,
    },
    {
      imageurl: flower,
    },
    {
      imageurl: sofa2,
    },
    {
      imageurl: sofa1,
    },
  ];
  return (
    <>
      <div className="ImgEditProduct w-full h-full">
        <HeaderNavProduct>
          <div className=" flex flex-col justify-around    mb-0 ">
            <div>
              <div className="flex flex-col md:flex-row md:gap-6 text-white p-4">
                <div>
                  <SliderProductPage images={images} />
                </div>
                <div>
                  <div>
                    <h1 className="text-4xl font-bold mb">
                      Modern Luxury Sofa
                    </h1>
                  </div>
                  <div className="flex flex-row text-yellow-500 text-2xl mb-2">
                    <GradeIcon />
                    <GradeIcon />
                    <GradeIcon />
                    <GradeIcon />
                    <GradeIcon />
                  </div>
                  <div className="text-gray-500 text-base mb-2">
                    <p>price</p>
                  </div>
                  <div className="font-bold text-4xl mb-2">
                    <span>$2,599.00</span>
                  </div>
                  <div className="border border-green-500 rounded rounded-xl text-green-600 bg-green-100 w-24 h-8 text-center mb-2">
                    <span>In Stock</span>
                  </div>
                  <div className="mb-2">
                    <p>Discription</p>
                  </div>
                  <div>
                    <ul className=" list-disc text-slate-600 font-medium text-lg font-bold mb-2">
                      <li>
                        The most beautiful curves of this swivel stool adds an
                        elegant touch to any environment
                      </li>
                      <li>
                        The most beautiful curves of this swivel stool adds an
                        elegant touch to any environment
                      </li>
                      <li>
                        The most beautiful curves of this swivel stool adds an
                        elegant touch to any environment
                      </li>
                      <li>
                        The most beautiful curves of this swivel stool adds an
                        elegant touch to any environment
                      </li>
                    </ul>
                  </div>
                  <div className="flex md:flex-row flex-col mb-2">
                    <div className="flex flex-col text-left">
                      <div>Frame Material</div>
                      <div className="text-slate-700">
                        <SelectBig1
                          text="Model"
                          value1="Aluminium"
                          value2="Carbon"
                          value3="Steel"
                          value4="Brasil"
                          value5="Wood"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col text-left">
                      <div>Color</div>
                      <div>
                        <SelectBig1
                          text="color"
                          value1="white"
                          value2="Pink"
                          value3="Black"
                          value4="Red"
                          value5="Blue"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col text-left">
                      <div>Number</div>
                      <div>
                        <SelectSmall />
                      </div>
                    </div>
                  </div>
                  <div>
                    <button className="buttonColor w-40  h-10 text-center text-white  rounded rounded-xl mb-4">
                      ADD TO CARD
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <EnhancedTable />
            </div>
          </div>
        </HeaderNavProduct>
      </div>
    </>
  );
}
