import React from "react";

import { Button, Img, Line, List, Text } from "components";
import Footer from "components/Footer";

const DepartmentPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-outfit sm:gap-10 md:gap-10 gap-[120px] items-center justify-start mx-auto w-full">
        <div className="bg-gradient  flex flex-col items-center justify-start w-full">
          <div className="h-[555px] md:h-[615px] md:px-5 relative w-full">
            <div className="h-[555px] md:h-[615px] m-auto w-full">
              <div className="h-[555px] md:h-[615px] m-auto w-full">
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
                              <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start my-auto right-[0] w-[73%]">
                                <div className="flex flex-row gap-7 items-start justify-start w-full">
                                  <Text
                                    className="hover:font-medium text-base text-gray-600"
                                    size="txtOutfitRegular16Gray600"
                                  >
                                    About Us
                                  </Text>
                                  <Text
                                    className="hover:font-medium text-base hover:text-gray-600 text-teal-500"
                                    size="txtOutfitMedium16"
                                  >
                                    Departments
                                  </Text>
                                </div>
                              </div>
                              <div className="absolute flex flex-col h-full inset-y-[0] justify-start left-[0] my-auto w-3/4">
                                <Text
                                  className="hover:font-medium mr-[152px] text-base hover:text-gray-600 text-gray-700"
                                  size="txtOutfitRegular16"
                                >
                                  Home
                                </Text>
                                <Line className="bg-teal-500 h-0.5 md:ml-[0] ml-[165px] mt-[3px] w-[16%]" />
                              </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="hover:font-medium mt-[3px] text-base hover:text-gray-600 text-gray-700"
                          >
                            <Text size="txtOutfitRegular16">Hospitality</Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="hover:font-medium text-base hover:text-gray-600 text-gray-700"
                          >
                            <Text size="txtOutfitRegular16">Mediclaim</Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="hover:font-medium text-base hover:text-gray-600 text-gray-700"
                          >
                            <Text size="txtOutfitRegular16">Media</Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="hover:font-medium text-base hover:text-gray-600 text-gray-700"
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
                  <div className="flex flex-row gap-3 items-start justify-start mt-[52px] w-[21%] md:w-full">
                    <Text
                      className="mb-0.5 text-2xl md:text-[22px] text-gray-700 sm:text-xl"
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
                      className="mt-0.5 text-2xl md:text-[22px] text-teal-500 sm:text-xl"
                      size="txtOutfitMedium24"
                    >
                      Department
                    </Text>
                  </div>
                  <Text
                    className="mt-[43px] sm:text-[32px] md:text-[38px] text-[42px] text-gray-900"
                    size="txtOutfitSemiBold42"
                  >
                    Cardiology Department
                  </Text>
                  <div className="flex md:flex-col flex-row gap-2.5 items-center justify-start mt-[7px] w-[51%] md:w-full">
                    <Line className="bg-teal-500 md:h-0.5 h-[49px] w-0.5 md:w-full" />
                    <Text
                      className="text-gray-600 text-xl w-[98%] sm:w-full"
                      size="txtOutfitRegular20Gray600"
                    >
                      Our Cardiac Emergency Response Team constitutes some of
                      the leading Cardiologists and Cardiac Surgeons.
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[294px] mt-[31px] text-center text-xl"
                    shape="round"
                    color="teal_500"
                    size="md"
                    variant="fill"
                  >
                    Lean More Department
                  </Button>
                </div>
              </div>
              <div className="absolute border-[19px] border-solid bottom-[2%] h-[389px] right-[9%] rotate-[90deg] rounded-[194px] teal_500_teal_500_00_border2 w-[388px]"></div>
            </div>
            <Img
              className="absolute bottom-[0] h-[371px] object-cover right-[11%] w-[23%]"
              src="images/img_cardiologyinn1.png"
              alt="cardiologyinnOne"
            />
            <Img
              className="absolute bottom-[27%] h-[174px] right-[37%]"
              src="images/img_frame_deep_orange_a100.svg"
              alt="frame"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[58px] items-center justify-start max-w-[1184px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[5px] items-center justify-start">
            <Text
              className="text-center text-teal-600 text-xl"
              size="txtOutfitSemiBold20"
            >
              Our Best Services
            </Text>
            <Text
              className="leading-[56.00px] sm:text-[32px] md:text-[38px] text-[42px] text-center text-gray-900 w-full"
              size="txtOutfitSemiBold42"
            >
              We Are the Best Treatment For our Hospital & Healthcare Center.
            </Text>
          </div>
          <div className="md:gap-5 gap-[76px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <Img
                className="h-[100px] w-[100px]"
                src="images/img_volume_blue_gray_50.svg"
                alt="volume"
              />
              <Text
                className="mt-[27px] text-2xl md:text-[22px] text-center text-gray-900 sm:text-xl"
                size="txtOutfitSemiBold24"
              >
                Dental Caring
              </Text>
              <Text
                className="leading-[24.00px] mt-[5px] text-base text-center text-gray-600 w-full"
                size="txtOutfitRegular16Gray600"
              >
                Proin ut mi lacinia, iaculis diam ut, semper lacus. Donec
                sodales leo vitae justo placerat
              </Text>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <Img
                className="h-[100px] w-[100px]"
                src="images/img_floatingicon_red_50.svg"
                alt="floatingicon"
              />
              <Text
                className="mt-[27px] text-2xl md:text-[22px] text-center text-gray-900 sm:text-xl"
                size="txtOutfitSemiBold24"
              >
                Heart Caring
              </Text>
              <Text
                className="leading-[24.00px] mt-[5px] text-base text-center text-gray-600 w-full"
                size="txtOutfitRegular16Gray600"
              >
                Proin ut mi lacinia, iaculis diam ut, semper lacus. Donec
                sodales leo vitae justo placerat
              </Text>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <Img
                className="h-[100px] w-[100px]"
                src="images/img_floatingicon_blue_gray_50.svg"
                alt="floatingicon"
              />
              <Text
                className="mt-[27px] text-2xl md:text-[22px] text-center text-gray-900 sm:text-xl"
                size="txtOutfitSemiBold24"
              >
                Child Emergency
              </Text>
              <Text
                className="leading-[24.00px] mt-[5px] text-base text-center text-gray-600 w-full"
                size="txtOutfitRegular16Gray600"
              >
                Proin ut mi lacinia, iaculis diam ut, semper lacus. Donec
                sodales leo vitae justo placerat
              </Text>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <Img
                className="h-[100px] w-[100px]"
                src="images/img_floatingicon_red_50_100x100.svg"
                alt="floatingicon"
              />
              <Text
                className="mt-[27px] text-2xl md:text-[22px] text-center text-gray-900 sm:text-xl"
                size="txtOutfitSemiBold24"
              >
                Surgery Center
              </Text>
              <Text
                className="leading-[24.00px] mt-[5px] text-base text-center text-gray-600 w-full"
                size="txtOutfitRegular16Gray600"
              >
                Proin ut mi lacinia, iaculis diam ut, semper lacus. Donec
                sodales leo vitae justo placerat
              </Text>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <Img
                className="h-[100px] w-[100px]"
                src="images/img_volume_blue_gray_50_100x100.svg"
                alt="volume"
              />
              <Text
                className="mt-[27px] text-2xl md:text-[22px] text-center text-gray-900 sm:text-xl"
                size="txtOutfitSemiBold24"
              >
                Eye Testing
              </Text>
              <Text
                className="leading-[24.00px] mt-[5px] text-base text-center text-gray-600 w-full"
                size="txtOutfitRegular16Gray600"
              >
                Proin ut mi lacinia, iaculis diam ut, semper lacus. Donec
                sodales leo vitae justo placerat
              </Text>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <Img
                className="h-[100px] w-[100px]"
                src="images/img_close_red_50.svg"
                alt="close"
              />
              <Text
                className="mt-6 text-2xl md:text-[22px] text-center text-gray-900 sm:text-xl"
                size="txtOutfitSemiBold24"
              >
                Medicine Center
              </Text>
              <Text
                className="leading-[24.00px] mt-2 text-base text-center text-gray-600 w-full"
                size="txtOutfitRegular16Gray600"
              >
                Proin ut mi lacinia, iaculis diam ut, semper lacus. Donec
                sodales leo vitae justo placerat
              </Text>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <Img
                className="h-[100px] w-[100px]"
                src="images/img_close_blue_gray_50.svg"
                alt="close"
              />
              <Text
                className="mt-[27px] text-2xl md:text-[22px] text-center text-gray-900 sm:text-xl"
                size="txtOutfitSemiBold24"
              >
                Neurology Surgery
              </Text>
              <Text
                className="leading-[24.00px] mt-[5px] text-base text-center text-gray-600 w-full"
                size="txtOutfitRegular16Gray600"
              >
                Proin ut mi lacinia, iaculis diam ut, semper lacus. Donec
                sodales leo vitae justo placerat
              </Text>
            </div>
            <div className="flex flex-1 flex-col gap-[27px] items-center justify-start w-full">
              <Img
                className="h-[100px] w-[100px]"
                src="images/img_globe_red_50.svg"
                alt="globe"
              />
              <div className="flex flex-col gap-[5px] items-center justify-start w-full">
                <Text
                  className="text-2xl md:text-[22px] text-center text-gray-900 sm:text-xl"
                  size="txtOutfitSemiBold24"
                >
                  Opthalmology Center
                </Text>
                <Text
                  className="leading-[24.00px] text-base text-center text-gray-600 w-full"
                  size="txtOutfitRegular16Gray600"
                >
                  Proin ut mi lacinia, iaculis diam ut, semper lacus. Donec
                  sodales leo vitae justo placerat
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 flex md:flex-col flex-row gap-[43px] items-start justify-start p-[29px] sm:px-5 w-full">
          <Img
            className="h-14 md:mt-0 mt-[322px] w-14"
            src="images/img_frame_teal_600_56x56.svg"
            alt="frame_One"
          />
          <div className="md:h-[1082px] sm:h-[552px] h-[561px] md:mt-0 my-6 md:px-5 relative w-[86%] md:w-full">
            <div className="absolute bottom-[0] flex md:flex-col flex-row gap-8 inset-x-[0] items-center justify-between mx-auto w-full">
              <div className="flex md:flex-1 flex-col items-center justify-start w-[49%] md:w-full">
                <div className="flex flex-col gap-8 items-center justify-start w-full">
                  <div className="flex sm:flex-col flex-row gap-8 items-center justify-between w-full">
                    <Img
                      className="h-[248px] md:h-auto object-cover rounded-[16px]"
                      src="images/img_rectangle4329_248x272.png"
                      alt="rectangle4329"
                    />
                    <Img
                      className="h-[247px] md:h-auto object-cover rounded-[16px]"
                      src="images/img_rectangle4332_247x272.png"
                      alt="rectangle4332"
                    />
                  </div>
                  <Img
                    className="h-[248px] md:h-auto object-cover rounded-tl-[16px] rounded-tr-[16px] w-full"
                    src="images/img_rectangle4333.png"
                    alt="rectangle4333"
                  />
                </div>
              </div>
              <div className="flex md:flex-1 flex-col items-start justify-start w-[49%] md:w-full">
                <div className="flex flex-col gap-[9px] items-start justify-start">
                  <Text
                    className="ml-1 md:ml-[0] text-center text-teal-600 text-xl"
                    size="txtOutfitSemiBold20"
                  >
                    Treatments & Facilities
                  </Text>
                  <Text
                    className="sm:text-[32px] md:text-[38px] text-[42px] text-gray-900"
                    size="txtOutfitMedium42"
                  >
                    Equipment & Facilities
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-3 items-start justify-start mt-[26px] w-full">
                  <Button
                    className="flex h-[30px] items-center justify-center mb-[27px] rounded-[50%] w-[30px]"
                    shape="circle"
                    color="teal_500_19"
                    size="xs"
                    variant="fill"
                  >
                    <Img
                      className="h-4"
                      src="images/img_frame_teal_500.svg"
                      alt="frame_Two"
                    />
                  </Button>
                  <Text
                    className="sm:flex-1 leading-[28.00px] text-gray-600 text-xl w-[93%] sm:w-full"
                    size="txtOutfitRegular20"
                  >
                    <>
                      India&#39;s first Siemens Axion Artis Zee digital flat
                      panel cath lab with additional DSA, 3D reconstruction and
                      angiography.
                    </>
                  </Text>
                </div>
                <div className="flex flex-row gap-3 items-start justify-start mt-5 w-[47%] md:w-full">
                  <Button
                    className="flex h-[30px] items-center justify-center rounded-[50%] w-[30px]"
                    shape="circle"
                    color="teal_500_19"
                    size="xs"
                    variant="fill"
                  >
                    <Img
                      className="h-4"
                      src="images/img_frame_teal_500.svg"
                      alt="frame_Three"
                    />
                  </Button>
                  <Text
                    className="mt-[3px] text-gray-600 text-xl"
                    size="txtOutfitRegular20"
                  >
                    A 10-bed step-down unit.
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-3 items-start justify-start mt-5 w-4/5 md:w-full">
                  <Button
                    className="flex h-[30px] items-center justify-center rounded-[50%] w-[30px]"
                    shape="circle"
                    color="teal_500_19"
                    size="xs"
                    variant="fill"
                  >
                    <Img
                      className="h-4"
                      src="images/img_frame_teal_500.svg"
                      alt="frame_Four"
                    />
                  </Button>
                  <Text
                    className="sm:mt-0 mt-[3px] text-gray-600 text-xl"
                    size="txtOutfitRegular20"
                  >
                    Computerized Treadmill Exercise Stress testing.
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-3 items-start justify-start mt-5 w-full">
                  <Button
                    className="flex h-[30px] items-center justify-center mb-[27px] rounded-[50%] w-[30px]"
                    shape="circle"
                    color="teal_500_19"
                    size="xs"
                    variant="fill"
                  >
                    <Img
                      className="h-4"
                      src="images/img_frame_teal_500.svg"
                      alt="frame_Five"
                    />
                  </Button>
                  <Text
                    className="sm:flex-1 leading-[28.00px] text-gray-600 text-xl w-[93%] sm:w-full"
                    size="txtOutfitRegular20"
                  >
                    24 hour holter monitoring with 12 channel facility and
                    signal averaging
                  </Text>
                </div>
                <div className="flex flex-row gap-3 items-start justify-start mt-5 w-[44%] md:w-full">
                  <Button
                    className="flex h-[30px] items-center justify-center rounded-[50%] w-[30px]"
                    shape="circle"
                    color="teal_500_19"
                    size="xs"
                    variant="fill"
                  >
                    <Img
                      className="h-4"
                      src="images/img_frame_teal_500.svg"
                      alt="frame_Six"
                    />
                  </Button>
                  <Text
                    className="mt-[3px] text-gray-600 text-xl"
                    size="txtOutfitRegular20"
                  >
                    Coronary Angiography.
                  </Text>
                </div>
                <div className="flex flex-row gap-3 items-start justify-start mt-5 w-[63%] md:w-full">
                  <Button
                    className="flex h-[30px] items-center justify-center rounded-[50%] w-[30px]"
                    shape="circle"
                    color="teal_500_19"
                    size="xs"
                    variant="fill"
                  >
                    <Img
                      className="h-4"
                      src="images/img_frame_teal_500.svg"
                      alt="frame_Seven"
                    />
                  </Button>
                  <Text
                    className="mt-[3px] text-gray-600 text-xl"
                    size="txtOutfitRegular20"
                  >
                    Coronary Angioplasty and Stenting.
                  </Text>
                </div>
                <div className="flex flex-row gap-3 items-start justify-start mt-5 w-[65%] md:w-full">
                  <Button
                    className="flex h-[30px] items-center justify-center rounded-[50%] w-[30px]"
                    shape="circle"
                    color="teal_500_19"
                    size="xs"
                    variant="fill"
                  >
                    <Img
                      className="h-4"
                      src="images/img_frame_teal_500.svg"
                      alt="frame_Eight"
                    />
                  </Button>
                  <Text
                    className="mt-[3px] text-gray-600 text-xl"
                    size="txtOutfitRegular20"
                  >
                    Radial Angiography and Angioplasty.
                  </Text>
                </div>
              </div>
            </div>
            <Img
              className="absolute h-[68px] right-[3%] top-[0] w-[68px]"
              src="images/img_checkmark.svg"
              alt="checkmark"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-start max-w-[1184px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[11px] items-center justify-start">
            <Text
              className="text-center text-teal-600 text-xl"
              size="txtOutfitSemiBold20"
            >
              Our Doctors
            </Text>
            <Text
              className="sm:text-[32px] md:text-[38px] text-[42px] text-center text-gray-900"
              size="txtOutfitSemiBold42"
            >
              Meet Our Top Rated Doctor
            </Text>
            <Text
              className="text-center text-gray-600 text-lg w-full"
              size="txtOutfitRegular18"
            >
              You will be handled by a team of expert doctors who have more than
              10 years experience in their fields and will get the best solution
              for problem
            </Text>
          </div>
          <List
            className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center mt-[58px] w-full"
            orientation="horizontal"
          >
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <div className="bg-blue_gray-50 flex flex-col items-center justify-start pt-7 sm:px-5 px-7 rounded-tl-[134px] rounded-tr-[134px] w-full">
                <Img
                  className="h-[241px] md:h-auto object-cover w-[92%]"
                  src="images/img_drmitapasswala.png"
                  alt="drmitapasswala"
                />
              </div>
              <div className="bg-white-A700 flex flex-col gap-[15px] items-start justify-start p-[15px] shadow-bs w-full">
                <Text
                  className="text-center text-gray-900 text-xl"
                  size="txtOutfitSemiBold20Gray900"
                >
                  Dr. Mita Passwala
                </Text>
                <div className="flex flex-row items-end justify-between w-full">
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[104px] rounded-md text-center text-sm"
                    color="blue_gray_50"
                    size="xs"
                    variant="fill"
                  >
                    Cardiologist
                  </Button>
                  <div className="flex flex-row items-start justify-evenly my-1">
                    <Img
                      className="h-[18px] w-[18px]"
                      src="images/img_star.svg"
                      alt="star"
                    />
                    <Text
                      className="text-base text-black-900 text-center"
                      size="txtOutfitMedium16Black900"
                    >
                      <span className="text-black-900 font-outfit font-semibold">
                        4.8
                      </span>
                      <span className="text-gray-600 font-outfit font-normal">
                        (250)
                      </span>
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-2 items-start justify-start mb-0.5 w-[79%] md:w-full">
                  <Img
                    className="h-5 w-5"
                    src="images/img_location_gray_600.svg"
                    alt="location"
                  />
                  <Text
                    className="text-base text-center text-gray-600"
                    size="txtOutfitRegular16Gray600"
                  >
                    Newyork Hospital, USA
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <div className="bg-gray-50 flex flex-col items-center justify-start pt-7 sm:px-5 px-7 rounded-tl-[134px] rounded-tr-[134px] w-full">
                <Img
                  className="h-[241px] md:h-auto object-cover w-[92%]"
                  src="images/img_drsuchayparikh.png"
                  alt="drsuchayparikh"
                />
              </div>
              <div className="bg-white-A700 flex flex-col items-start justify-start p-[15px] shadow-bs w-full">
                <Text
                  className="mt-0.5 text-center text-gray-900 text-xl"
                  size="txtOutfitSemiBold20Gray900"
                >
                  Dr. Suchay Parikh
                </Text>
                <div className="flex flex-row items-end justify-between mt-[13px] w-full">
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[104px] rounded-md text-center text-sm"
                    color="blue_gray_50"
                    size="xs"
                    variant="fill"
                  >
                    Cardiologist
                  </Button>
                  <div className="flex flex-row items-start justify-evenly my-1">
                    <Img
                      className="h-[18px] w-[18px]"
                      src="images/img_star.svg"
                      alt="star"
                    />
                    <Text
                      className="text-base text-black-900 text-center"
                      size="txtOutfitMedium16Black900"
                    >
                      <span className="text-black-900 font-outfit font-semibold">
                        4.8
                      </span>
                      <span className="text-gray-600 font-outfit font-normal">
                        (250)
                      </span>
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-2 items-start justify-start mb-0.5 mt-4 w-[79%] md:w-full">
                  <Img
                    className="h-5 w-5"
                    src="images/img_location_gray_600.svg"
                    alt="location"
                  />
                  <Text
                    className="text-base text-center text-gray-600"
                    size="txtOutfitRegular16Gray600"
                  >
                    Newyork Hospital, USA
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <div className="bg-blue_gray-50 flex flex-col items-center justify-start pt-[38px] sm:px-5 px-[38px] rounded-tl-[134px] rounded-tr-[134px] w-full">
                <Img
                  className="h-[225px] md:h-auto mt-1.5 object-cover w-full"
                  src="images/img_drarunmehra1.png"
                  alt="drarunmehraOne"
                />
              </div>
              <div className="bg-white-A700 flex flex-col gap-[15px] items-start justify-start p-[15px] shadow-bs w-full">
                <Text
                  className="text-center text-gray-900 text-xl"
                  size="txtOutfitSemiBold20Gray900"
                >
                  Dr. Arun Mehra
                </Text>
                <div className="flex flex-row items-end justify-between w-full">
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[104px] rounded-md text-center text-sm"
                    color="blue_gray_50"
                    size="xs"
                    variant="fill"
                  >
                    Cardiologist
                  </Button>
                  <div className="flex flex-row items-start justify-evenly my-1">
                    <Img
                      className="h-[18px] w-[18px]"
                      src="images/img_star.svg"
                      alt="star"
                    />
                    <Text
                      className="text-base text-black-900 text-center"
                      size="txtOutfitMedium16Black900"
                    >
                      <span className="text-black-900 font-outfit font-semibold">
                        4.8
                      </span>
                      <span className="text-gray-600 font-outfit font-normal">
                        (250)
                      </span>
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-2 items-start justify-start mb-0.5 w-[79%] md:w-full">
                  <Img
                    className="h-5 w-5"
                    src="images/img_location_gray_600.svg"
                    alt="location"
                  />
                  <Text
                    className="text-base text-center text-gray-600"
                    size="txtOutfitRegular16Gray600"
                  >
                    Newyork Hospital, USA
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <div className="bg-gray-50 flex flex-col items-center justify-start pt-7 sm:px-5 px-7 rounded-tl-[134px] rounded-tr-[134px] w-full">
                <Img
                  className="h-[241px] md:h-auto object-cover w-[96%]"
                  src="images/img_drapurvavasavada.png"
                  alt="drapurvavasavad"
                />
              </div>
              <div className="bg-white-A700 flex flex-col items-start justify-start p-[15px] shadow-bs w-full">
                <Text
                  className="mt-0.5 text-center text-gray-900 text-xl"
                  size="txtOutfitSemiBold20Gray900"
                >
                  Dr. Apurva Vasavada
                </Text>
                <div className="flex flex-row items-end justify-between mt-[13px] w-full">
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[104px] rounded-md text-center text-sm"
                    color="blue_gray_50"
                    size="xs"
                    variant="fill"
                  >
                    Cardiologist
                  </Button>
                  <div className="flex flex-row items-start justify-evenly my-1">
                    <Img
                      className="h-[18px] w-[18px]"
                      src="images/img_star.svg"
                      alt="star"
                    />
                    <Text
                      className="text-base text-black-900 text-center"
                      size="txtOutfitMedium16Black900"
                    >
                      <span className="text-black-900 font-outfit font-semibold">
                        4.8
                      </span>
                      <span className="text-gray-600 font-outfit font-normal">
                        (250)
                      </span>
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-2 items-start justify-start mb-0.5 mt-4 w-[79%] md:w-full">
                  <Img
                    className="h-5 w-5"
                    src="images/img_location_gray_600.svg"
                    alt="location"
                  />
                  <Text
                    className="text-base text-center text-gray-600"
                    size="txtOutfitRegular16Gray600"
                  >
                    Newyork Hospital, USA
                  </Text>
                </div>
              </div>
            </div>
          </List>
          <Img
            className="h-[38px] mt-[42px]"
            src="images/img_clock_teal_500.svg"
            alt="clock"
          />
        </div>
        <Footer className="bg-gray-900 flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default DepartmentPage;
