import React from "react";

import { Button, Img, Line, Text } from "components";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <Img
          className="h-10 sm:h-auto ml-6 md:ml-[0] md:mt-0 my-6 object-cover w-[12%] md:w-full"
          src="images/img_image119.png"
          alt="image119"
        />
        <div className="flex flex-col items-center justify-start mb-[29px] md:ml-[0] ml-[72px] md:mt-0 mt-8 w-[55%] md:w-full">
          <div className="flex md:flex-col flex-row gap-7 items-start justify-between w-full">
            <div className="h-[26px] relative w-[84%] md:w-full">
              <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start my-auto right-[0] w-[87%]">
                <ul className="flex flex-row gap-7 sm:hidden items-start justify-between w-full common-row-list">
                  <li>
                    <Text
                      className="hover:font-medium text-base text-gray-600 hover:text-teal-500"
                      size="txtOutfitRegular16Gray600"
                    >
                      About Us
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="hover:font-medium text-base text-gray-600 hover:text-teal-500"
                      size="txtOutfitRegular16Gray600"
                    >
                      Departments
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="hover:font-medium text-base text-gray-700 hover:text-teal-500"
                      size="txtOutfitRegular16"
                    >
                      Hospitality
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="hover:font-medium text-base text-gray-700 hover:text-teal-500"
                      size="txtOutfitRegular16"
                    >
                      Mediclaim
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="hover:font-medium text-base text-teal-500"
                      size="txtOutfitMedium16"
                    >
                      Media
                    </Text>
                  </li>
                </ul>
              </div>
              <div className="absolute flex flex-col h-full inset-[0] justify-center m-auto w-[98%]">
                <Text
                  className="mr-[481px] text-base text-gray-700"
                  size="txtOutfitRegular16"
                >
                  Home
                </Text>
                <Line className="bg-teal-500 h-0.5 md:ml-[0] ml-[494px] mt-[3px] w-[6%]" />
              </div>
            </div>
            <Text className="text-base text-gray-700" size="txtOutfitRegular16">
              Contact Us
            </Text>
          </div>
        </div>
        <Button
          className="cursor-pointer font-medium font-outfit leading-[normal] min-w-[206px] md:ml-[0] ml-[72px] mr-6 md:mt-0 my-4 text-center text-xl"
          shape="round"
          color="teal_500"
          size="md"
          variant="outline"
        >
          Free Consultation
        </Button>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
