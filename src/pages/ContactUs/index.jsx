import React from "react";

import { Button, Img, Input, Line, List, Text, TextArea } from "components";
import Footer from "components/Footer";

const ContactUsPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-outfit items-center justify-start mx-auto w-full">
        <div className="flex flex-col md:gap-10 gap-[120px] items-start justify-start w-full">
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
                        <div className="sm:h-[105px] h-[26px] relative w-full">
                          <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start my-auto right-[0] w-[89%]">
                            <ul className="flex sm:flex-col flex-row sm:hidden items-start justify-start w-full common-row-list">
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
                                  className="hover:font-medium ml-7 text-base text-gray-600 hover:text-teal-500"
                                >
                                  <Text size="txtOutfitRegular16Gray600">
                                    Departments
                                  </Text>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:"
                                  className="hover:font-medium ml-7 text-base text-gray-600 hover:text-teal-500"
                                >
                                  <Text size="txtOutfitRegular16Gray600">
                                    Hospitality
                                  </Text>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:"
                                  className="hover:font-medium ml-7 text-base text-gray-600 hover:text-teal-500"
                                >
                                  <Text size="txtOutfitRegular16Gray600">
                                    Mediclaim
                                  </Text>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="javascript:"
                                  className="hover:font-medium ml-[101px] text-base text-teal-500"
                                >
                                  <Text size="txtOutfitMedium16">
                                    Contact Us
                                  </Text>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <Text
                            className="absolute right-[17%] text-base text-gray-600 top-[0]"
                            size="txtOutfitRegular16Gray600"
                          >
                            Media
                          </Text>
                          <div className="absolute flex flex-col h-full inset-y-[0] justify-start left-[0] my-auto w-[93%]">
                            <Text
                              className="mr-[554px] text-base text-gray-700"
                              size="txtOutfitRegular16"
                            >
                              Home
                            </Text>
                            <Line className="bg-teal-500 h-0.5 md:ml-[0] ml-[567px] mt-[3px] w-[6%]" />
                          </div>
                        </div>
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
                        Contact Us{" "}
                      </Text>
                    </div>
                    <Text
                      className="mt-[41px] sm:text-[32px] md:text-[38px] text-[42px] text-gray-900"
                      size="txtOutfitSemiBold42"
                    >
                      Tristar In Contact Us
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
                      className="cursor-pointer font-medium leading-[normal] min-w-[182px] mt-[31px] text-center text-xl"
                      shape="round"
                      color="teal_500"
                      size="md"
                      variant="fill"
                    >
                      Contact Us
                    </Button>
                  </div>
                </div>
                <div className="absolute border-[19px] border-solid bottom-[2%] h-[389px] right-[9%] rotate-[90deg] rounded-[194px] teal_500_teal_500_00_border6 w-[388px]"></div>
              </div>
              <Img
                className="absolute bottom-[0] h-[371px] object-cover right-[14%] w-[18%]"
                src="images/img_doctorsmiling.png"
                alt="doctorsmiling"
              />
              <Img
                className="absolute bottom-[27%] h-[174px] right-[37%]"
                src="images/img_frame_deep_orange_a100.svg"
                alt="frame"
              />
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end ml-40 md:ml-[0] md:px-5 w-[84%] md:w-full">
            <Img
              className="h-[123px] md:mt-0 mt-[21px] w-[124px]"
              src="images/img_group_teal_600.svg"
              alt="group"
            />
            <div className="flex flex-col gap-[59px] items-center justify-start md:ml-[0] ml-[7px] w-[72%] md:w-full">
              <div className="flex flex-col gap-[7px] items-center justify-start">
                <a
                  href="javascript:"
                  className="text-center text-teal-600 text-xl"
                >
                  <Text size="txtOutfitSemiBold20">Contact Us</Text>
                </a>
                <Text
                  className="sm:text-[32px] md:text-[38px] text-[42px] text-center text-gray-900"
                  size="txtOutfitSemiBold42"
                >
                  Get In Touch{" "}
                </Text>
              </div>
              <List
                className="sm:flex-col flex-row gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
                orientation="horizontal"
              >
                <div className="md:h-[206px] h-[246px] relative w-full">
                  <div className="absolute bg-blue_gray-50 bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto p-7 sm:px-5 rounded-lg w-full">
                    <div className="flex flex-col gap-2 items-center justify-start mb-7 mt-[35px]">
                      <Text
                        className="text-2xl md:text-[22px] text-center text-gray-900 sm:text-xl"
                        size="txtOutfitSemiBold24"
                      >
                        Call Us
                      </Text>
                      <Text
                        className="leading-[24.00px] text-base text-center text-gray-600"
                        size="txtOutfitRegular16Gray600"
                      >
                        <>
                          +62-361-234-4567 |<br /> Hotline 112-110-5
                        </>
                      </Text>
                    </div>
                  </div>
                  <Img
                    className="absolute h-[78px] inset-x-[0] mx-auto top-[0] w-[78px]"
                    src="images/img_group1000003417.svg"
                    alt="group1000003417"
                  />
                </div>
                <div className="md:h-[206px] h-[246px] relative w-full">
                  <div className="absolute bg-red-50 bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto p-2 rounded-lg w-full">
                    <div className="flex flex-col gap-2 items-center justify-start mb-12 mt-[55px]">
                      <Text
                        className="text-2xl md:text-[22px] text-center text-gray-900 sm:text-xl"
                        size="txtOutfitSemiBold24"
                      >
                        Email Us
                      </Text>
                      <Text
                        className="leading-[24.00px] text-base text-center text-gray-600 w-full"
                        size="txtOutfitRegular16Gray600"
                      >
                        thirstarhospital@gmail.com support@info.com
                      </Text>
                    </div>
                  </div>
                  <Img
                    className="absolute h-[78px] inset-x-[0] mx-auto top-[0] w-[78px]"
                    src="images/img_close_white_a700.svg"
                    alt="close"
                  />
                </div>
                <div className="md:h-[206px] h-[246px] relative w-full">
                  <div className="absolute bg-blue_gray-50 bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto p-3.5 rounded-lg w-full">
                    <div className="flex flex-col gap-2 items-center justify-start mb-[18px] mt-[49px]">
                      <Text
                        className="text-2xl md:text-[22px] text-center text-gray-900 sm:text-xl"
                        size="txtOutfitSemiBold24"
                      >
                        Address
                      </Text>
                      <Text
                        className="leading-[24.00px] text-base text-center text-gray-600 w-full"
                        size="txtOutfitRegular16Gray600"
                      >
                        Nanpura, Opp. T & TV High School, Kharwawad, Athwa Gate,
                        Surat, Gujarat 395001
                      </Text>
                    </div>
                  </div>
                  <Img
                    className="absolute h-[78px] inset-x-[0] mx-auto top-[0] w-[78px]"
                    src="images/img_location_white_a700.svg"
                    alt="location"
                  />
                </div>
              </List>
            </div>
            <div className="md:h-[100px] h-[115px] md:ml-[0] ml-[95px] md:mt-0 mt-[221px] pb-1 pr-1 relative rotate-[-21deg] w-[116px]">
              <div className="absolute md:h-[100px] h-[108px] left-[0] top-[0] w-[95%]">
                <div className="md:h-[100px] h-[108px] m-auto w-full">
                  <div className="md:h-[100px] h-[108px] m-auto w-full">
                    <div className="md:h-[100px] h-[108px] m-auto w-full">
                      <Img
                        className="absolute h-[100px] left-[0] top-[0]"
                        src="images/img_group_teal_500.svg"
                        alt="group_One"
                      />
                      <Img
                        className="absolute bottom-[0] h-[75px] right-[0]"
                        src="images/img_dashboard.svg"
                        alt="dashboard"
                      />
                    </div>
                    <Img
                      className="absolute h-[52px] left-[24%] top-[19%]"
                      src="images/img_reply_teal_500.svg"
                      alt="reply"
                    />
                  </div>
                  <Img
                    className="absolute bottom-[13%] h-[46px] right-[17%]"
                    src="images/img_dashboard_teal_500.svg"
                    alt="dashboard_One"
                  />
                </div>
                <div className="absolute flex flex-row gap-[13px] items-start justify-center right-[13%] top-[21%] w-[68%]">
                  <Img
                    className="h-[31px] mt-[18px]"
                    src="images/img_vector_teal_500.svg"
                    alt="vector"
                  />
                  <Img
                    className="h-[27px] w-[26px]"
                    src="images/img_vector_teal_500_27x26.svg"
                    alt="vector_One"
                  />
                </div>
              </div>
              <Img
                className="absolute h-4 right-[3%] top-[30%]"
                src="images/img_vector_teal_500_27x26.svg"
                alt="vector_Two"
              />
            </div>
          </div>
          <div className="bg-gradient6  flex flex-col items-end justify-start md:pl-10 pl-32 sm:pl-5 w-full">
            <div className="flex md:flex-col flex-row gap-[39px] items-center justify-end w-full">
              <div className="flex md:flex-1 flex-col items-end justify-start w-[49%] md:w-full">
                <Img
                  className="h-[23px] w-[23px]"
                  src="images/img_minimize.svg"
                  alt="minimize"
                />
                <div className="md:h-[636px] h-[658px] relative w-full">
                  <div className="absolute flex h-[636px] inset-[0] justify-end m-auto w-[99%] md:w-full">
                    <Img
                      className="h-1.5 mb-[258px] ml-auto mr-[140px] mt-auto"
                      src="images/img_arrowdown.svg"
                      alt="arrowdown"
                    />
                    <div className="absolute flex flex-col h-full inset-[0] items-start justify-center m-auto w-full">
                      <Text
                        className="text-center text-teal-600 text-xl"
                        size="txtOutfitSemiBold20"
                      >
                        Have Any Question?
                      </Text>
                      <Text
                        className="leading-[42.00px] mt-[3px] sm:text-2xl md:text-[26px] text-[28px] text-gray-900 w-full"
                        size="txtOutfitSemiBold28"
                      >
                        It is a long established fact that a reader will be
                        distracted content of a page when looking.
                      </Text>
                      <Input
                        name="group1000003608"
                        placeholder="Name *"
                        className="font-montserrat p-0 placeholder:text-gray-600 text-base text-left tracking-[0.16px] w-full"
                        wrapClassName="mt-8 w-[81%]"
                        type="text"
                      ></Input>
                      <Input
                        name="group1000003609"
                        placeholder="Email"
                        className="font-outfit p-0 placeholder:text-gray-600 text-base text-left tracking-[0.16px] w-full"
                        wrapClassName="mt-4 w-[81%]"
                        type="email"
                      ></Input>
                      <Input
                        name="group1000003610"
                        placeholder="Phone number *"
                        className="font-montserrat p-0 placeholder:text-gray-600 text-base text-left tracking-[0.16px] w-full"
                        wrapClassName="mt-4 w-[81%]"
                        type="number"
                      ></Input>
                      <Input
                        name="group1000003611"
                        placeholder="Services"
                        className="font-outfit p-0 placeholder:text-gray-600 text-base text-left tracking-[0.16px] w-full"
                        wrapClassName="mt-4 w-[81%]"
                      ></Input>
                      <TextArea
                        className="bg-transparent border border-black-900_1e border-solid font-outfit mt-4 pb-[35px] pl-5 sm:pr-5 pr-[35px] pt-[17px] rounded-[10px] text-base placeholder:text-gray-600 text-gray-600 text-left tracking-[0.16px] w-[81%] sm:w-full"
                        name="group1000003612"
                        placeholder="Message....."
                      ></TextArea>
                      <Button
                        className="cursor-pointer font-medium font-outfit leading-[normal] min-w-[211px] mt-8 text-center text-xl"
                        shape="round"
                        color="teal_500"
                        size="md"
                        variant="fill"
                      >
                        Send Message
                      </Button>
                    </div>
                  </div>
                  <Img
                    className="absolute bottom-[0] h-[86px] right-[0]"
                    src="images/img_user_deep_orange_a100_86x84.svg"
                    alt="user"
                  />
                </div>
              </div>
              <div className="h-[827px] relative w-[49%] md:w-full">
                <div className="absolute bg-gradient7  h-[827px] inset-y-[0] my-auto right-[0] w-[66%]"></div>
                <Img
                  className="absolute h-[650px] inset-y-[0] left-[0] my-auto object-cover rounded-[16px] w-4/5"
                  src="images/img_slice311.png"
                  alt="slice311"
                />
              </div>
            </div>
          </div>
          <Footer className="bg-gray-900 flex items-center justify-center md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default ContactUsPage;
