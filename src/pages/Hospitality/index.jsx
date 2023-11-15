import React from "react";

import { Button, Img, Line, Text } from "components";
import Footer from "components/Footer";

const HospitalityPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-outfit items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <div className="bg-gradient  flex flex-col items-center justify-start w-full">
            <div className="h-[555px] md:h-[614px] md:px-5 relative w-full">
              <div className="h-[555px] md:h-[614px] m-auto w-full">
                <div className="h-[555px] md:h-[614px] m-auto w-full">
                  <Img
                    className="h-[555px] m-auto object-cover w-full"
                    src="images/img_1_555x1440.png"
                    alt="One"
                  />
                  <div className="absolute flex flex-col inset-x-[0] items-start justify-start mx-auto top-[6%] w-[83%]">
                    <header className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
                      <Img
                        className="md:flex-1 h-10 sm:h-auto ml-6 md:ml-[0] md:mt-0 my-6 object-cover w-[12%] md:w-full"
                        src="images/img_image119.png"
                        alt="image119"
                      />
                      <div className="flex md:flex-1 flex-col items-center justify-start mb-[29px] md:ml-[0] ml-[72px] md:mt-0 mt-8 w-[55%] md:w-full">
                        <ul className="flex sm:flex-col flex-row md:hidden items-start justify-between w-full common-row-list">
                          <li>
                            <a href="javascript:">
                              <div className="h-[26px] relative">
                                <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start my-auto right-[0] w-[81%]">
                                  <ul className="flex flex-row gap-7 items-start justify-between w-full">
                                    <li>
                                      <a
                                        href="javascript:"
                                        className="hover:font-medium text-base text-gray-600 hover:text-teal-500"
                                      >
                                        <Text size="txtOutfitRegular16Gray600">
                                          About Us
                                        </Text>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="javascript:"
                                        className="hover:font-medium text-base text-gray-600 hover:text-teal-500"
                                      >
                                        <Text size="txtOutfitRegular16Gray600">
                                          Departments
                                        </Text>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="javascript:"
                                        className="hover:font-medium text-base text-teal-500"
                                      >
                                        <Text size="txtOutfitMedium16">
                                          Hospitality
                                        </Text>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="absolute flex flex-col h-full inset-y-[0] justify-start left-[0] my-auto w-[87%]">
                                  <Text
                                    className="hover:font-medium mr-[275px] text-base text-gray-700 hover:text-teal-500"
                                    size="txtOutfitRegular16"
                                  >
                                    Home
                                  </Text>
                                  <Line className="bg-teal-500 h-0.5 ml-72 md:ml-[0] mt-[3px] w-[10%]" />
                                </div>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:"
                              className="hover:font-medium text-base text-gray-700 hover:text-teal-500"
                            >
                              <Text size="txtOutfitRegular16">Mediclaim</Text>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:"
                              className="hover:font-medium text-base text-gray-700 hover:text-teal-500"
                            >
                              <Text size="txtOutfitRegular16">Media</Text>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:"
                              className="hover:font-medium text-base text-gray-700 hover:text-teal-500"
                            >
                              <Text size="txtOutfitRegular16">Contact Us</Text>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <Button
                        className="cursor-pointer font-medium leading-[normal] min-w-[206px] md:ml-[0] ml-[72px] mr-6 md:mt-0 my-4 text-center text-xl"
                        shape="round"
                        color="teal_500"
                        size="md"
                        variant="outline"
                      >
                        Free Consultation
                      </Button>
                    </header>
                    <div className="flex flex-row gap-3 items-start justify-start mt-[52px] w-[19%] md:w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-gray-700 sm:text-xl"
                        size="txtOutfitRegular24"
                      >
                        Home
                      </Text>
                      <Img
                        className="h-[18px] mt-[5px] w-[18px]"
                        src="images/img_arrowright_gray_700.svg"
                        alt="arrowright"
                      />
                      <Text
                        className="text-2xl md:text-[22px] text-teal-500 sm:text-xl"
                        size="txtOutfitMedium24"
                      >
                        Hospitality
                      </Text>
                    </div>
                    <Text
                      className="mt-[43px] sm:text-[32px] md:text-[38px] text-[42px] text-gray-900"
                      size="txtOutfitSemiBold42"
                    >
                      Our Hospitality
                    </Text>
                    <div className="flex md:flex-col flex-row gap-2.5 items-center justify-start mt-[7px] w-[51%] md:w-full">
                      <Line className="bg-teal-500 md:h-0.5 h-[49px] w-0.5 md:w-full" />
                      <Text
                        className="text-gray-600 text-xl w-[98%] sm:w-full"
                        size="txtOutfitRegular20Gray600"
                      >
                        Tristar Hospitals introduced in Surat the “ARFI”
                        technology the latest modality to diagnose early liver
                        failure and cirrhosis.
                      </Text>
                    </div>
                    <Button
                      className="cursor-pointer font-medium leading-[normal] min-w-[287px] mt-[31px] text-center text-xl"
                      shape="round"
                      color="teal_500"
                      size="md"
                      variant="fill"
                    >
                      Lean More Hospitalityt
                    </Button>
                  </div>
                </div>
                <div className="absolute border-[19px] border-solid bottom-[2%] h-[389px] right-[9%] rotate-[90deg] rounded-[194px] teal_500_teal_500_00_border3 w-[388px]"></div>
              </div>
              <Img
                className="absolute bottom-[0] h-[371px] object-cover right-[11%] w-[24%]"
                src="images/img_cheerfulmaled.png"
                alt="cheerfulmaled"
              />
              <Img
                className="absolute bottom-[27%] h-[174px] right-[37%]"
                src="images/img_frame_deep_orange_a100.svg"
                alt="frame"
              />
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start md:ml-[0] ml-[143px] mt-[113px] md:px-5 w-3/4 md:w-full">
            <Img
              className="h-[130px] mb-5 w-[130px]"
              src="images/img_frame_teal_600_56x56.svg"
              alt="frame_One"
            />
            <div className="flex flex-col gap-[5px] items-center justify-start md:ml-[0] ml-[43px] md:mt-0 mt-[7px]">
              <Text
                className="text-center text-teal-600 text-xl"
                size="txtOutfitSemiBold20"
              >
                Our Facilities
              </Text>
              <Text
                className="leading-[56.00px] sm:text-[32px] md:text-[38px] text-[42px] text-center text-gray-900 w-full"
                size="txtOutfitSemiBold42"
              >
                All dedicated multi and super specialty services are available
                under one roof.
              </Text>
            </div>
            <Img
              className="h-[68px] mb-[22px] md:ml-[0] ml-[31px] md:mt-0 mt-[61px] w-[68px]"
              src="images/img_checkmark_white_a700.svg"
              alt="checkmark"
            />
          </div>
          <div className="md:gap-5 gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center max-w-[1184px] min-h-[auto] mt-[58px] mx-auto md:px-5 w-full">
            <div className="md:h-[278px] h-[358px] relative w-full">
              <div className="absolute bg-blue_gray-50 bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto p-[27px] sm:px-5 rounded-[16px] w-full">
                <Text
                  className="mt-[198px] text-center text-gray-900 text-xl"
                  size="txtOutfitMedium20"
                >
                  ICU
                </Text>
              </div>
              <Img
                className="absolute h-[278px] inset-x-[0] mx-auto object-cover rounded-tl-[112px] rounded-tr-[112px] top-[0] w-[83%]"
                src="images/img_rectangle4331.png"
                alt="rectangle4331"
              />
            </div>
            <div className="md:h-[278px] h-[358px] relative w-full">
              <div className="absolute bg-red-50 bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto p-[25px] sm:px-5 rounded-[16px] w-full">
                <Text
                  className="mt-[201px] text-center text-gray-900 text-xl"
                  size="txtOutfitMedium20"
                >
                  The Hybrid Cath Lab
                </Text>
              </div>
              <Img
                className="absolute h-[278px] inset-x-[0] mx-auto object-cover rounded-tl-[112px] rounded-tr-[112px] top-[0] w-[83%]"
                src="images/img_rectangle4331_278x224.png"
                alt="rectangle4331"
              />
            </div>
            <div className="md:h-[278px] h-[358px] relative w-full">
              <div className="absolute bg-blue_gray-50 bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto p-[25px] sm:px-5 rounded-[16px] w-full">
                <Text
                  className="mt-[201px] text-center text-gray-900 text-xl"
                  size="txtOutfitMedium20"
                >
                  24x7 Pharmacy
                </Text>
              </div>
              <Img
                className="absolute h-[278px] inset-x-[0] mx-auto object-cover rounded-tl-[112px] rounded-tr-[112px] top-[0] w-[83%]"
                src="images/img_rectangle4331_1.png"
                alt="rectangle4331"
              />
            </div>
            <div className="md:h-[278px] h-[358px] relative w-full">
              <div className="absolute bg-red-50 bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto p-[27px] sm:px-5 rounded-[16px] w-full">
                <Text
                  className="mt-[197px] text-center text-gray-900 text-xl"
                  size="txtOutfitMedium20"
                >
                  Advanced Ultrasound
                </Text>
              </div>
              <Img
                className="absolute h-[278px] inset-x-[0] mx-auto object-cover rounded-tl-[112px] rounded-tr-[112px] top-[0] w-[83%]"
                src="images/img_rectangle4331_2.png"
                alt="rectangle4331"
              />
            </div>
            <div className="md:h-[278px] h-[358px] relative w-full">
              <div className="absolute bg-blue_gray-50 bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto p-[25px] sm:px-5 rounded-[16px] w-full">
                <Text
                  className="mt-[201px] text-center text-gray-900 text-xl"
                  size="txtOutfitMedium20"
                >
                  Operation Theather
                </Text>
              </div>
              <Img
                className="absolute h-[278px] inset-x-[0] mx-auto object-cover rounded-tl-[112px] rounded-tr-[112px] top-[0] w-[83%]"
                src="images/img_rectangle4331_3.png"
                alt="rectangle4331"
              />
            </div>
            <div className="md:h-[278px] h-[358px] relative w-full">
              <div className="absolute bg-red-50 bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto p-[25px] sm:px-5 rounded-[16px] w-full">
                <Text
                  className="mt-[201px] text-center text-gray-900 text-xl"
                  size="txtOutfitMedium20"
                >
                  The Pathalogy Lab
                </Text>
              </div>
              <Img
                className="absolute h-[278px] inset-x-[0] mx-auto object-cover rounded-tl-[112px] rounded-tr-[112px] top-[0] w-[83%]"
                src="images/img_rectangle4331_4.png"
                alt="rectangle4331"
              />
            </div>
            <div className="md:h-[278px] h-[358px] relative w-full">
              <div className="absolute bg-blue_gray-50 bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto p-[27px] sm:px-5 rounded-[16px] w-full">
                <Text
                  className="mt-[198px] text-center text-gray-900 text-xl"
                  size="txtOutfitMedium20"
                >
                  OPD
                </Text>
              </div>
              <Img
                className="absolute h-[278px] inset-x-[0] mx-auto object-cover rounded-tl-[112px] rounded-tr-[112px] top-[0] w-[83%]"
                src="images/img_rectangle4331_5.png"
                alt="rectangle4331"
              />
            </div>
            <div className="md:h-[278px] h-[358px] relative w-full">
              <div className="absolute bg-red-50 bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto p-[25px] sm:px-5 rounded-[16px] w-full">
                <Text
                  className="mt-[201px] text-center text-gray-900 text-xl"
                  size="txtOutfitMedium20"
                >
                  Supply Department
                </Text>
              </div>
              <Img
                className="absolute h-[278px] inset-x-[0] mx-auto object-cover rounded-tl-[112px] rounded-tr-[112px] top-[0] w-[83%]"
                src="images/img_rectangle4331_6.png"
                alt="rectangle4331"
              />
            </div>
          </div>
          <div className="md:h-[1157px] h-[1200px] sm:h-[4115px] mt-[120px] md:px-5 relative w-full">
            <Img
              className="h-[86px] ml-auto mr-[263px] mt-[140px]"
              src="images/img_user_deep_orange_a100.svg"
              alt="user"
            />
            <div className="absolute bg-gray-100 md:h-[1037px] h-[1200px] sm:h-[3995px] inset-[0] justify-center m-auto p-20 md:px-10 sm:px-5 w-full">
              <Img
                className="h-[86px] ml-auto mr-[152px] mt-[17px]"
                src="images/img_user_deep_orange_a100.svg"
                alt="user_One"
              />
              <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[83%]">
                <div className="flex flex-col gap-[59px] justify-start w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-10 gap-[203px] items-center justify-start md:ml-[0] ml-[103px] w-[59%] md:w-full">
                    <Img
                      className="h-14"
                      src="images/img_vector.svg"
                      alt="vector"
                    />
                    <div className="flex flex-col gap-[5px] items-center justify-start">
                      <Text
                        className="text-center text-teal-600 text-xl"
                        size="txtOutfitSemiBold20"
                      >
                        Hospital Gallery
                      </Text>
                      <Text
                        className="sm:text-[32px] md:text-[38px] text-[42px] text-center text-gray-900"
                        size="txtOutfitSemiBold42"
                      >
                        Our Latest Successful
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-evenly w-full">
                        <Img
                          className="sm:flex-1 h-[298px] md:h-auto object-cover w-1/4 sm:w-full"
                          src="images/img_rectangle4327_298x288.png"
                          alt="rectangle4327"
                        />
                        <Img
                          className="sm:flex-1 h-[298px] md:h-auto object-cover w-[31%] sm:w-full"
                          src="images/img_rectangle4342.png"
                          alt="rectangle4342"
                        />
                        <Img
                          className="sm:flex-1 h-[298px] md:h-auto object-cover w-[21%] sm:w-full"
                          src="images/img_rectangle4343_298x247.png"
                          alt="rectangle4343"
                        />
                        <Img
                          className="sm:flex-1 h-[298px] md:h-auto object-cover w-1/4 sm:w-full"
                          src="images/img_rectangle4341_298x288.png"
                          alt="rectangle4341"
                        />
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-evenly w-full">
                        <Img
                          className="sm:flex-1 h-[298px] md:h-auto object-cover w-[32%] sm:w-full"
                          src="images/img_rectangle4346.png"
                          alt="rectangle4346"
                        />
                        <Img
                          className="sm:flex-1 h-[298px] md:h-auto object-cover w-[16%] sm:w-full"
                          src="images/img_rectangle4350.png"
                          alt="rectangle4350"
                        />
                        <Img
                          className="sm:flex-1 h-[298px] md:h-auto object-cover w-[23%] sm:w-full"
                          src="images/img_rectangle4349.png"
                          alt="rectangle4349"
                        />
                        <Img
                          className="sm:flex-1 h-[298px] md:h-auto object-cover w-[32%] sm:w-full"
                          src="images/img_rectangle4348.png"
                          alt="rectangle4348"
                        />
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-evenly w-full">
                        <Img
                          className="sm:flex-1 h-[298px] md:h-auto object-cover w-1/4 sm:w-full"
                          src="images/img_rectangle4351.png"
                          alt="rectangle4351"
                        />
                        <Img
                          className="sm:flex-1 h-[298px] md:h-auto object-cover w-[31%] sm:w-full"
                          src="images/img_rectangle4353.png"
                          alt="rectangle4353"
                        />
                        <Img
                          className="sm:flex-1 h-[298px] md:h-auto object-cover w-[21%] sm:w-full"
                          src="images/img_rectangle4354.png"
                          alt="rectangle4354"
                        />
                        <Img
                          className="sm:flex-1 h-[298px] md:h-auto object-cover w-1/4 sm:w-full"
                          src="images/img_rectangle4327_298x288.png"
                          alt="rectangle4352"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer className="bg-gray-900 flex items-center justify-center md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default HospitalityPage;
