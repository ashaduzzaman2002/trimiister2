import React from "react";

import { Button, Img, Line, Text } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="md:h-[1269px] h-[611px] sm:h-[614px] mt-[3px] relative w-full">
          <div className="absolute md:h-[1266px] h-[611px] inset-[0] justify-center m-auto w-full">
            <Img
              className="h-[611px] m-auto object-cover w-full"
              src="images/img_1.png"
              alt="One_One"
            />
            <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[10%] w-[83%]">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <div className="flex flex-col gap-[9px] items-start justify-start">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                    size="txtOutfitSemiBold32WhiteA700"
                  >
                    Subscribe Our Newsletter
                  </Text>
                  <Text
                    className="leading-[150.00%] text-base text-white-A700_cc w-full"
                    size="txtOutfitRegular16WhiteA700cc"
                  >
                    Enter your details to get business inspiration, Branding
                    solutions, and consulting tips delivered to your inbox
                  </Text>
                </div>
                <div className="bg-blue_gray-100 flex md:flex-1 flex-row items-center justify-between md:mt-0 my-[19px] pl-5 w-[39%] md:w-full">
                  <Text
                    className="text-base text-center text-gray-600"
                    size="txtOutfitRegular16Gray600"
                  >
                    Enter your email
                  </Text>
                  <Button
                    className="cursor-pointer font-medium font-outfit min-w-[156px] text-center text-lg"
                    shape="square"
                    color="teal_500"
                    size="lg"
                    variant="fill"
                  >
                    Subscribe
                  </Button>
                </div>
              </div>
              <Line className="bg-white-A700_0f h-px mt-[42px] w-full" />
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[34px] w-full">
                <div className="flex md:flex-1 flex-col gap-8 items-start justify-start md:mt-0 mt-[5px] w-[26%] md:w-full">
                  <Img
                    className="h-10 md:h-auto object-cover w-[46%] sm:w-full"
                    src="images/img_image119.png"
                    alt="image119_One"
                  />
                  <Text
                    className="leading-[22.00px] text-base text-white-A700_cc"
                    size="txtOutfitLight16"
                  >
                    <>
                      The proper Footer on proper time can
                      <br />
                      preserve you protection. We assist you <br />
                      make sureeverybody forward.
                    </>
                  </Text>
                  <div className="flex flex-row gap-5 items-start justify-start w-auto">
                    <Button
                      className="flex h-[35px] items-center justify-center rounded-[17px] w-[35px]"
                      color="white_A700"
                      size="sm"
                      variant="fill"
                    >
                      <Img
                        className="h-[15px]"
                        src="images/img_facebook.png"
                        alt="facebook"
                      />
                    </Button>
                    <Button
                      className="flex h-[35px] items-center justify-center rounded-[17px] w-[35px]"
                      color="white_A700"
                      size="sm"
                      variant="fill"
                    >
                      <Img
                        className="h-[15px]"
                        src="images/img_twitter.png"
                        alt="twitter"
                      />
                    </Button>
                    <Button
                      className="flex h-[35px] items-center justify-center rounded-[17px] w-[35px]"
                      color="white_A700"
                      size="sm"
                      variant="fill"
                    >
                      <Img
                        className="h-[15px]"
                        src="images/img_twitter_35x35.png"
                        alt="twitter_One"
                      />
                    </Button>
                    <div className="bg-white-A700 flex flex-col h-[35px] items-center justify-start p-2.5 rounded-[17px] w-[35px]">
                      <div className="flex flex-col h-[15px] items-center justify-start w-[15px]">
                        <Img
                          className="h-[15px] md:h-auto object-cover w-[15px]"
                          src="images/img_maskgroup.png"
                          alt="maskgroup"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-5 items-start justify-start w-auto">
                  <div className="flex flex-col gap-4 items-start justify-start w-auto">
                    <Text
                      className="capitalize text-lg text-white-A700 w-auto"
                      size="txtOutfitSemiBold18"
                    >
                      Quick link
                    </Text>
                    <div className="flex flex-row items-center justify-start w-[45%] md:w-full">
                      <Img
                        className="h-[7px] md:h-auto object-cover w-[53%]"
                        src="images/img_maskgroup_7x20.png"
                        alt="maskgroup_One"
                      />
                      <Img
                        className="h-[7px] md:h-auto object-cover w-[53%]"
                        src="images/img_maskgroup_7x20.png"
                        alt="maskgroup_Two"
                      />
                    </div>
                  </div>
                  <ul className="flex flex-col gap-5 items-start justify-start w-auto md:w-full common-column-list">
                    <li>
                      <div className="flex flex-row gap-1.5 items-end justify-start">
                        <Img
                          className="h-[13px] md:h-auto object-cover w-[13px]"
                          src="images/img_maskgroup_13x13.png"
                          alt="maskgroup_Three"
                        />
                        <Text
                          className="capitalize text-base text-white-A700_cc w-auto"
                          size="txtOutfitRegular16WhiteA700cc"
                        >
                          Home
                        </Text>
                      </div>
                    </li>
                    <li>
                      <div className="flex flex-row gap-1.5 items-end justify-start">
                        <Img
                          className="h-[13px] md:h-auto object-cover w-[13px]"
                          src="images/img_maskgroup_13x13.png"
                          alt="maskgroup_Four"
                        />
                        <Text
                          className="capitalize text-base text-white-A700_cc w-auto"
                          size="txtOutfitRegular16WhiteA700cc"
                        >
                          About us
                        </Text>
                      </div>
                    </li>
                    <li>
                      <div className="flex flex-row gap-1.5 items-end justify-start">
                        <Img
                          className="h-[13px] md:h-auto object-cover w-[13px]"
                          src="images/img_maskgroup_13x13.png"
                          alt="maskgroup_Five"
                        />
                        <Text
                          className="capitalize text-base text-white-A700_cc w-auto"
                          size="txtOutfitRegular16WhiteA700cc"
                        >
                          Services
                        </Text>
                      </div>
                    </li>
                    <li>
                      <div className="flex flex-row gap-1.5 items-end justify-start">
                        <Img
                          className="h-[13px] md:h-auto object-cover w-[13px]"
                          src="images/img_maskgroup_13x13.png"
                          alt="maskgroup_Six"
                        />
                        <Text
                          className="capitalize text-base text-white-A700_cc w-auto"
                          size="txtOutfitRegular16WhiteA700cc"
                        >
                          Blog
                        </Text>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="flex md:flex-1 flex-col gap-[11px] items-start justify-start w-[18%] md:w-full">
                  <div className="flex flex-col gap-5 items-start justify-start w-auto">
                    <div className="flex flex-col gap-4 items-start justify-start w-auto">
                      <Text
                        className="capitalize text-lg text-white-A700 w-auto"
                        size="txtOutfitSemiBold18"
                      >
                        Departments
                      </Text>
                      <div className="flex flex-row items-center justify-start w-[35%] md:w-full">
                        <Img
                          className="h-[7px] md:h-auto object-cover w-[53%]"
                          src="images/img_maskgroup_7x20.png"
                          alt="maskgroup_Seven"
                        />
                        <Img
                          className="h-[7px] md:h-auto object-cover w-[53%]"
                          src="images/img_maskgroup_7x20.png"
                          alt="maskgroup_Eight"
                        />
                      </div>
                    </div>
                    <ul className="flex flex-col gap-5 items-start justify-start w-auto md:w-full common-column-list">
                      <li>
                        <div className="flex flex-row gap-1.5 items-end justify-start">
                          <Img
                            className="h-[13px] md:h-auto object-cover w-[13px]"
                            src="images/img_maskgroup_13x13.png"
                            alt="maskgroup_Nine"
                          />
                          <Text
                            className="capitalize text-base text-white-A700_cc w-auto"
                            size="txtOutfitRegular16WhiteA700cc"
                          >
                            Cardiology
                          </Text>
                        </div>
                      </li>
                      <li>
                        <div className="flex flex-row gap-1.5 items-end justify-start">
                          <Img
                            className="h-[13px] md:h-auto object-cover w-[13px]"
                            src="images/img_maskgroup_13x13.png"
                            alt="maskgroup_Ten"
                          />
                          <Text
                            className="capitalize text-base text-white-A700_cc w-auto"
                            size="txtOutfitRegular16WhiteA700cc"
                          >
                            Cardiac Surgery
                          </Text>
                        </div>
                      </li>
                      <li>
                        <div className="flex flex-row gap-1.5 items-end justify-start">
                          <Img
                            className="h-[13px] md:h-auto object-cover w-[13px]"
                            src="images/img_maskgroup_13x13.png"
                            alt="maskgroup_Eleven"
                          />
                          <Text
                            className="capitalize text-base text-white-A700_cc w-auto"
                            size="txtOutfitRegular16WhiteA700cc"
                          >
                            Critical Care Management
                          </Text>
                        </div>
                      </li>
                      <li>
                        <div className="flex flex-row gap-1.5 items-end justify-start">
                          <Img
                            className="h-[13px] md:h-auto object-cover w-[13px]"
                            src="images/img_maskgroup_13x13.png"
                            alt="maskgroup_Twelve"
                          />
                          <Text
                            className="capitalize text-base text-white-A700_cc w-auto"
                            size="txtOutfitRegular16WhiteA700cc"
                          >
                            General Surgery
                          </Text>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-row gap-1.5 items-end justify-start w-auto">
                    <Img
                      className="h-[13px] md:h-auto object-cover w-[13px]"
                      src="images/img_maskgroup_13x13.png"
                      alt="maskgroup_Thirteen"
                    />
                    <Text
                      className="capitalize text-base text-white-A700_cc w-auto"
                      size="txtOutfitRegular16WhiteA700cc"
                    >
                      Orthopaedic Surgery
                    </Text>
                  </div>
                  <div className="flex flex-row gap-1.5 items-end justify-start w-auto">
                    <Img
                      className="h-[13px] md:h-auto object-cover w-[13px]"
                      src="images/img_maskgroup_13x13.png"
                      alt="maskgroup_Fourteen"
                    />
                    <Text
                      className="capitalize text-base text-white-A700_cc w-auto"
                      size="txtOutfitRegular16WhiteA700cc"
                    >
                      Oncology
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[13px] items-start justify-start w-auto">
                  <div className="flex flex-col gap-4 items-start justify-start w-auto">
                    <Text
                      className="text-lg text-white-A700 w-auto"
                      size="txtOutfitSemiBold18"
                    >
                      Contact
                    </Text>
                    <div className="flex relative w-1/2">
                      <Img
                        className="h-[7px] my-auto object-cover w-[61%]"
                        src="images/img_maskgroup_7x20.png"
                        alt="maskgroup_Fifteen"
                      />
                      <Img
                        className="h-[7px] ml-[-7px] my-auto object-cover w-[61%] z-[1]"
                        src="images/img_maskgroup_7x20.png"
                        alt="maskgroup_Sixteen"
                      />
                    </div>
                  </div>
                  <ul className="flex flex-col gap-5 items-start justify-start w-auto md:w-full common-column-list">
                    <li>
                      <div className="flex flex-row gap-3.5 items-center justify-start">
                        <Img
                          className="h-[25px] md:h-auto object-cover w-[25px]"
                          src="images/img_maskgroup_25x25.png"
                          alt="maskgroup_Seventeen"
                        />
                        <Text
                          className="capitalize text-base text-white-A700_cc w-auto"
                          size="txtOutfitRegular16WhiteA700cc"
                        >
                          44 Danwers, NY City, USA, 70-102
                        </Text>
                      </div>
                    </li>
                    <li>
                      <div className="flex flex-row gap-3.5 items-center justify-start">
                        <Img
                          className="h-[25px] md:h-auto object-cover w-[25px]"
                          src="images/img_maskgroup_1.png"
                          alt="maskgroup_Eighteen"
                        />
                        <Text
                          className="capitalize text-base text-white-A700_cc w-auto"
                          size="txtOutfitRegular16WhiteA700cc"
                        >
                          lamaro@lamaroyc.us
                        </Text>
                      </div>
                    </li>
                    <li>
                      <div className="flex flex-row gap-3.5 items-center justify-start">
                        <Img
                          className="h-[25px] md:h-auto object-cover w-[25px]"
                          src="images/img_maskgroup_1.png"
                          alt="maskgroup_Nineteen"
                        />
                        <Text
                          className="capitalize text-base text-white-A700_cc w-auto"
                          size="txtOutfitRegular16WhiteA700cc"
                        >
                          91+585-656-658
                        </Text>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[82px] inset-x-[0] items-center justify-end mx-auto p-6 sm:px-5 w-full"
            style={{ backgroundImage: "url('images/img_group1000003534.png')" }}
          >
            <Text
              className="mt-3 text-base text-center text-white-A700"
              size="txtOutfitSemiBold16"
            >
              © 2023 All rights reserved
            </Text>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
