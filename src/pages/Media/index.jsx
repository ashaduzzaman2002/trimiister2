import React from "react";

import { Button, Img, Line, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const MediaPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-outfit items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="bg-gradient  flex flex-col items-center justify-start w-full">
            <div className="h-[555px] md:h-[663px] md:px-5 relative w-full">
              <div className="h-[555px] md:h-[663px] m-auto w-full">
                <div className="h-[555px] md:h-[663px] m-auto w-full">
                  <Img
                    className="h-[555px] m-auto object-cover w-full"
                    src="images/img_1_555x1440.png"
                    alt="One"
                  />
                  <div className="absolute flex flex-col inset-x-[0] items-start justify-start mx-auto top-[6%] w-[83%]">
                    <Header className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-center w-full" />
                    <div className="flex flex-row gap-3 items-start justify-start mt-[51px] w-[15%] md:w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-gray-700 sm:text-xl"
                        size="txtOutfitRegular24"
                      >
                        Home
                      </Text>
                      <Img
                        className="h-[18px] mt-1.5 w-[18px]"
                        src="images/img_arrowright_gray_700.svg"
                        alt="arrowright"
                      />
                      <Text
                        className="text-2xl md:text-[22px] text-teal-500 sm:text-xl"
                        size="txtOutfitMedium24"
                      >
                        Media
                      </Text>
                    </div>
                    <Text
                      className="mt-[41px] sm:text-[32px] md:text-[38px] text-[42px] text-gray-900"
                      size="txtOutfitSemiBold42"
                    >
                      Tristar In News
                    </Text>
                    <div className="flex md:flex-col flex-row gap-2.5 items-center justify-start mt-[11px] w-[51%] md:w-full">
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
                      className="cursor-pointer font-medium leading-[normal] min-w-[231px] mt-[31px] text-center text-xl"
                      shape="round"
                      color="teal_500"
                      size="md"
                      variant="fill"
                    >
                      Lean More News
                    </Button>
                  </div>
                </div>
                <div className="absolute border-[19px] border-solid bottom-[2%] h-[389px] right-[9%] rotate-[90deg] rounded-[194px] teal_500_teal_500_00_border4 w-[388px]"></div>
              </div>
              <Img
                className="absolute bottom-[0] h-[371px] object-cover right-[11%] w-[24%]"
                src="images/img_portraitsmilingmaledoctor.png"
                alt="portraitsmiling"
              />
              <Img
                className="absolute bottom-[27%] h-[174px] right-[37%]"
                src="images/img_frame_deep_orange_a100.svg"
                alt="frame"
              />
            </div>
          </div>
          <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between max-w-[976px] mt-[121px] mx-auto md:px-5 w-full">
            <Img
              className="h-14 sm:mt-0 mt-[19px]"
              src="images/img_vector.svg"
              alt="vector"
            />
            <div className="flex flex-col gap-[11px] items-center justify-start mb-[11px]">
              <Text
                className="text-center text-teal-600 text-xl"
                size="txtOutfitSemiBold20"
              >
                Events
              </Text>
              <Text
                className="sm:text-[32px] md:text-[38px] text-[42px] text-center text-gray-900"
                size="txtOutfitSemiBold42"
              >
                Events By Tristars
              </Text>
            </div>
            <Img
              className="h-[86px] sm:mt-0 mt-[15px]"
              src="images/img_user_deep_orange_a100.svg"
              alt="user"
            />
          </div>
          <div className="md:gap-5 gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center max-w-[1184px] min-h-[auto] mt-[42px] mx-auto md:px-5 w-full">
            <div className="border border-black-900_1e border-solid flex flex-1 flex-col gap-[19px] items-start justify-start p-[18px] rounded-[16px] w-full">
              <Img
                className="h-[182px] md:h-auto object-cover rounded-[12px] w-full"
                src="images/img_rectangle4355.png"
                alt="rectangle4355"
              />
              <div className="flex flex-col items-start justify-start w-3/5 md:w-full">
                <Text
                  className="text-center text-gray-900 text-xl"
                  size="txtOutfitSemiBold20Gray900"
                >
                  Academic Meet
                </Text>
                <Text
                  className="mt-[9px] text-base text-center text-gray-600"
                  size="txtOutfitRegular16Gray600"
                >
                  27 August, 2019
                </Text>
                <div className="flex flex-row gap-1.5 items-center justify-start mt-3 w-[72%] md:w-full">
                  <Text
                    className="text-base text-teal-500"
                    size="txtOutfitMedium16"
                  >
                    Read More
                  </Text>
                  <Img
                    className="h-4 w-4"
                    src="images/img_arrowright.svg"
                    alt="arrowright"
                  />
                </div>
              </div>
            </div>
            <div className="border border-black-900_1e border-solid flex flex-1 flex-col gap-[21px] items-start justify-start p-[18px] rounded-[16px] w-full">
              <Img
                className="h-[182px] md:h-auto object-cover rounded-[12px] w-full"
                src="images/img_rectangle4355_182x236.png"
                alt="rectangle4355"
              />
              <div className="flex flex-col items-start justify-start w-[93%] md:w-full">
                <Text
                  className="text-center text-gray-900 text-xl"
                  size="txtOutfitSemiBold20Gray900"
                >
                  Celebrating Nurse’s Day
                </Text>
                <Text
                  className="mt-[7px] text-base text-center text-gray-600"
                  size="txtOutfitRegular16Gray600"
                >
                  12 May, 2019
                </Text>
                <div className="flex flex-row gap-1.5 items-center justify-start mt-3 w-[46%] md:w-full">
                  <Text
                    className="text-base text-teal-500"
                    size="txtOutfitMedium16"
                  >
                    Read More
                  </Text>
                  <Img
                    className="h-4 w-4"
                    src="images/img_arrowright.svg"
                    alt="arrowright"
                  />
                </div>
              </div>
            </div>
            <div className="border border-black-900_1e border-solid flex flex-1 flex-col gap-5 items-start justify-start p-[18px] rounded-[16px] w-full">
              <Img
                className="h-[182px] md:h-auto object-cover rounded-[12px] w-full"
                src="images/img_rectangle4355_1.png"
                alt="rectangle4355"
              />
              <div className="flex flex-col items-start justify-start w-[96%] md:w-full">
                <Text
                  className="text-center text-gray-900 text-xl"
                  size="txtOutfitSemiBold20Gray900"
                >
                  Patent Ductus Arteriosus
                </Text>
                <Text
                  className="mt-[9px] text-base text-center text-gray-600"
                  size="txtOutfitRegular16Gray600"
                >
                  04 May, 2019
                </Text>
                <div className="flex flex-row gap-1.5 items-center justify-start mt-3 w-[45%] md:w-full">
                  <Text
                    className="text-base text-teal-500"
                    size="txtOutfitMedium16"
                  >
                    Read More
                  </Text>
                  <Img
                    className="h-4 w-4"
                    src="images/img_arrowright.svg"
                    alt="arrowright"
                  />
                </div>
              </div>
            </div>
            <div className="border border-black-900_1e border-solid flex flex-1 flex-col gap-[21px] items-center justify-start p-[15px] rounded-[16px] w-full">
              <Img
                className="h-[182px] md:h-auto mt-[3px] object-cover rounded-[12px] w-[98%]"
                src="images/img_rectangle4355_2.png"
                alt="rectangle4355"
              />
              <div className="flex flex-col items-start justify-start mb-[3px] w-[99%] md:w-full">
                <Text
                  className="text-center text-gray-900 text-xl"
                  size="txtOutfitSemiBold20Gray900"
                >
                  Dr. Apratim Goel (Lecture)
                </Text>
                <Text
                  className="mt-2 text-base text-center text-gray-600"
                  size="txtOutfitRegular16Gray600"
                >
                  27 August, 2019
                </Text>
                <div className="flex flex-row gap-1.5 items-center justify-start mt-3 w-[42%] md:w-full">
                  <Text
                    className="text-base text-teal-500"
                    size="txtOutfitMedium16"
                  >
                    Read More
                  </Text>
                  <Img
                    className="h-4 w-4"
                    src="images/img_arrowright.svg"
                    alt="arrowright"
                  />
                </div>
              </div>
            </div>
            <div className="border border-black-900_1e border-solid flex flex-1 flex-col gap-[19px] items-start justify-start p-[18px] rounded-[16px] w-full">
              <Img
                className="h-[182px] md:h-auto object-cover rounded-[12px] w-full"
                src="images/img_rectangle4355_3.png"
                alt="rectangle4355"
              />
              <div className="flex flex-col items-start justify-start w-[53%] md:w-full">
                <Text
                  className="md:ml-[0] ml-[3px] text-center text-gray-900 text-xl"
                  size="txtOutfitSemiBold20Gray900"
                >
                  IAOH Lecture
                </Text>
                <Text
                  className="md:ml-[0] ml-[3px] mt-2 text-base text-center text-gray-600"
                  size="txtOutfitRegular16Gray600"
                >
                  17 March, 2018
                </Text>
                <div className="flex flex-row gap-1.5 items-center justify-start mt-3 w-4/5 md:w-full">
                  <Text
                    className="text-base text-teal-500"
                    size="txtOutfitMedium16"
                  >
                    Read More
                  </Text>
                  <Img
                    className="h-4 w-4"
                    src="images/img_arrowright.svg"
                    alt="arrowright"
                  />
                </div>
              </div>
            </div>
            <div className="border border-black-900_1e border-solid flex flex-1 flex-col gap-[21px] items-start justify-start p-4 rounded-[16px] w-full">
              <Img
                className="h-[182px] md:h-auto ml-0.5 md:ml-[0] mt-0.5 object-cover rounded-[12px] w-[99%]"
                src="images/img_rectangle4355_4.png"
                alt="rectangle4355"
              />
              <div className="flex flex-col items-start justify-start mb-0.5 w-[93%] md:w-full">
                <Text
                  className="text-center text-gray-900 text-xl"
                  size="txtOutfitSemiBold20Gray900"
                >
                  BSNL Retired Employees
                </Text>
                <Text
                  className="mt-[7px] text-base text-center text-gray-600"
                  size="txtOutfitRegular16Gray600"
                >
                  07 September, 2017
                </Text>
                <div className="flex flex-row gap-1.5 items-center justify-start ml-0.5 md:ml-[0] mt-3 w-[46%] md:w-full">
                  <Text
                    className="text-base text-teal-500"
                    size="txtOutfitMedium16"
                  >
                    Read More
                  </Text>
                  <Img
                    className="h-4 w-4"
                    src="images/img_arrowright.svg"
                    alt="arrowright"
                  />
                </div>
              </div>
            </div>
            <div className="border border-black-900_1e border-solid flex flex-1 flex-col gap-[21px] items-start justify-start p-[18px] rounded-[16px] w-full">
              <Img
                className="h-[182px] md:h-auto object-cover rounded-[12px] w-full"
                src="images/img_rectangle4355_5.png"
                alt="rectangle4355"
              />
              <div className="flex flex-col items-start justify-start w-[95%] md:w-full">
                <Text
                  className="text-center text-gray-900 text-xl"
                  size="txtOutfitSemiBold20Gray900"
                >
                  Dr. Ajay Mishra (Lecture)
                </Text>
                <Text
                  className="mt-[7px] text-base text-center text-gray-600"
                  size="txtOutfitRegular16Gray600"
                >
                  29 August, 2017
                </Text>
                <div className="flex flex-row gap-1.5 items-center justify-start mt-3 w-[45%] md:w-full">
                  <Text
                    className="text-base text-teal-500"
                    size="txtOutfitMedium16"
                  >
                    Read More
                  </Text>
                  <Img
                    className="h-4 w-4"
                    src="images/img_arrowright.svg"
                    alt="arrowright"
                  />
                </div>
              </div>
            </div>
            <div className="border border-black-900_1e border-solid flex flex-1 flex-col gap-[21px] items-start justify-start p-[18px] rounded-[16px] w-full">
              <Img
                className="h-[182px] md:h-auto object-cover rounded-[12px] w-full"
                src="images/img_rectangle4355_6.png"
                alt="rectangle4355"
              />
              <div className="flex flex-col items-start justify-start w-[78%] md:w-full">
                <Text
                  className="text-center text-gray-900 text-xl"
                  size="txtOutfitSemiBold20Gray900"
                >
                  World Diabetes Day
                </Text>
                <Text
                  className="mt-[7px] text-base text-center text-gray-600"
                  size="txtOutfitRegular16Gray600"
                >
                  27 August, 2019
                </Text>
                <div className="flex flex-row gap-1.5 items-center justify-start mt-3 w-[55%] md:w-full">
                  <Text
                    className="text-base text-teal-500"
                    size="txtOutfitMedium16"
                  >
                    Read More
                  </Text>
                  <Img
                    className="h-4 w-4"
                    src="images/img_arrowright.svg"
                    alt="arrowright"
                  />
                </div>
              </div>
            </div>
            <div className="border border-black-900_1e border-solid flex flex-1 flex-col gap-[21px] items-start justify-start p-[18px] rounded-[16px] w-full">
              <Img
                className="h-[182px] md:h-auto object-cover rounded-[12px] w-full"
                src="images/img_rectangle4355_7.png"
                alt="rectangle4355"
              />
              <div className="flex flex-col items-start justify-start w-[86%] md:w-full">
                <Text
                  className="md:ml-[0] ml-[3px] text-center text-gray-900 text-xl"
                  size="txtOutfitSemiBold20Gray900"
                >
                  Camp At - Pidilite Ltd.
                </Text>
                <Text
                  className="md:ml-[0] ml-[3px] mt-[7px] text-base text-center text-gray-600"
                  size="txtOutfitRegular16Gray600"
                >
                  27 September, 2014
                </Text>
                <div className="flex flex-row gap-1.5 items-center justify-start mt-3 w-1/2 md:w-full">
                  <Text
                    className="text-base text-teal-500"
                    size="txtOutfitMedium16"
                  >
                    Read More
                  </Text>
                  <Img
                    className="h-4 w-4"
                    src="images/img_arrowright.svg"
                    alt="arrowright"
                  />
                </div>
              </div>
            </div>
            <div className="border border-black-900_1e border-solid flex flex-1 flex-col gap-[19px] items-center justify-start p-4 rounded-[16px] w-full">
              <Img
                className="h-[182px] md:h-auto mt-0.5 object-cover rounded-[12px] w-[99%]"
                src="images/img_rectangle4355_8.png"
                alt="rectangle4355"
              />
              <div className="flex flex-col items-start justify-start mb-0.5 w-[99%] md:w-full">
                <Text
                  className="text-center text-gray-900 text-xl"
                  size="txtOutfitSemiBold20Gray900"
                >
                  Texrade International Ltd.
                </Text>
                <Text
                  className="mt-[9px] text-base text-center text-gray-600"
                  size="txtOutfitRegular16Gray600"
                >
                  07 September, 2017
                </Text>
                <div className="flex flex-row gap-1.5 items-center justify-start ml-0.5 md:ml-[0] mt-3 w-[43%] md:w-full">
                  <Text
                    className="text-base text-teal-500"
                    size="txtOutfitMedium16"
                  >
                    Read More
                  </Text>
                  <Img
                    className="h-4 w-4"
                    src="images/img_arrowright.svg"
                    alt="arrowright"
                  />
                </div>
              </div>
            </div>
            <div className="border border-black-900_1e border-solid flex flex-1 flex-col gap-[19px] items-start justify-start p-[18px] rounded-[16px] w-full">
              <Img
                className="h-[182px] md:h-auto object-cover rounded-[12px] w-full"
                src="images/img_rectangle4355_9.png"
                alt="rectangle4355"
              />
              <div className="flex flex-col items-start justify-start w-[48%] md:w-full">
                <Text
                  className="text-center text-gray-900 text-xl"
                  size="txtOutfitSemiBold20Gray900"
                >
                  A CME
                </Text>
                <Text
                  className="mt-[9px] text-base text-center text-gray-600"
                  size="txtOutfitRegular16Gray600"
                >
                  29 August, 2017
                </Text>
                <div className="flex flex-row gap-1.5 items-center justify-start mt-3 w-[91%] md:w-full">
                  <Text
                    className="text-base text-teal-500"
                    size="txtOutfitMedium16"
                  >
                    Read More
                  </Text>
                  <Img
                    className="h-4 w-4"
                    src="images/img_arrowright.svg"
                    alt="arrowright"
                  />
                </div>
              </div>
            </div>
            <div className="border border-black-900_1e border-solid flex flex-1 flex-col gap-[21px] items-start justify-start p-[18px] rounded-[16px] w-full">
              <Img
                className="h-[182px] md:h-auto object-cover rounded-[12px] w-full"
                src="images/img_rectangle4355_10.png"
                alt="rectangle4355"
              />
              <div className="flex flex-col items-start justify-start w-[92%] md:w-full">
                <Text
                  className="text-center text-gray-900 text-xl"
                  size="txtOutfitSemiBold20Gray900"
                >
                  Mega Medical Check-up{" "}
                </Text>
                <Text
                  className="mt-[7px] text-base text-center text-gray-600"
                  size="txtOutfitRegular16Gray600"
                >
                  27 August, 2019
                </Text>
                <div className="flex flex-row gap-1.5 items-center justify-start mt-3 w-[47%] md:w-full">
                  <Text
                    className="text-base text-teal-500"
                    size="txtOutfitMedium16"
                  >
                    Read More
                  </Text>
                  <Img
                    className="h-4 w-4"
                    src="images/img_arrowright.svg"
                    alt="arrowright"
                  />
                </div>
              </div>
            </div>
          </div>
          <Footer className="bg-gray-900 flex items-center justify-center mt-[120px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default MediaPage;
