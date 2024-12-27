"use client";
import DefaultLayout from "../Layout/DefaultLayout";
import Image from "next/image";
export default function ExperienceSection() {
  return (
    <div>
      <DefaultLayout>
        <div className="w-full mx-auto h-auto relative ">
          {/* Dekstop UI */}
          <div className="hidden md:flex">
            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
              <div className="w-full xl:w-1/2">
                <div className="left-[50px] top-[72px] absolute text-center text-black text-5xl font-extrabold font-['Montserrat'] dark:text-white">
                  MY <br />
                  EXPERIENCES
                </div>
              </div>
              <div className="w-full xl:w-1/2">
                <div className="w-[400px] h-[400px] right-0 top-0 absolute">
                  <div className="w-[400px] h-[400px] left-[-50px] top-[8px] absolute">
                    <Image
                      className="absolute"
                      src={"/backdrop.png"}
                      height={400}
                      width={400}
                      alt="backdrop"
                    />
                  </div>
                  <Image
                    className="w-[300px] h-[244px] left-2 top-0 absolute"
                    src={"/man-working.png"}
                    height={244}
                    width={300}
                    alt="man-working"
                  />
                </div>
              </div>
            </div>

            {/* New Work Experience Data Section */}
            <div className="w-full mt-60 left-0 mb-16">
              <div className="w-full h-full relative flex flex-col">
                <div className="w-[526px]">
                  <div className="text-center text-black text-base font-normal font-['Montserrat'] dark:text-white">
                    PT. MOJADI APLIKASI INDONESIA
                  </div>
                  <div className="w-[18px] h-[17px] left-0 top-[-20px] relative bg-[#041d37] rounded-full dark:bg-[#1669BE]" />
                  <div className="flex flex-row xl:flex-row mb-5">
                    <div className="w-1.5">
                      <div className="w-[482px] left-[44px] relative text-black text-base font-normal font-['Montserrat'] text-justify dark:text-white">
                        Officiis eligendi itaque labore et dolorum mollitia
                        officiis optio vero. Quisquam sunt adipisci omnis et ut.
                        Nulla accusantium dolor incidunt officia tempore. Et
                        eius omnis. Cupiditate ut dicta maxime officiis quidem
                        quia. Sed et consectetur qui quia repellendus itaque
                        neque. Officiis eligendi itaque labore et dolorum
                        mollitia officiis optio vero. Quisquam sunt adipisci
                        omnis et ut. Nulla accusantium dolor incidunt officia
                        tempore. Et eius omnis. Cupiditate ut dicta maxime
                        officiis quidem quia. Sed et consectetur qui quia
                        repellendus itaque neque.Officiis eligendi itaque labore
                        et dolorum mollitia officiis optio vero. Quisquam sunt
                        adipisci omnis et ut. Nulla accusantium dolor incidunt
                        officia tempore. Et eius omnis. Cupiditate ut dicta
                        maxime officiis quidem quia. Sed et consectetur qui quia
                        repellendus itaque neque.Officiis eligendi itaque labore
                        et dolorum mollitia officiis optio vero. Quisquam sunt
                        adipisci omnis et ut. Nulla accusantium dolor incidunt
                        officia tempore. Et eius omnis. Cupiditate ut dicta
                        maxime officiis quidem quia. Sed et consectetur qui quia
                        repellendus itaque neque.
                      </div>
                    </div>
                    <div className="w-1.5">
                      <div className="w-[3px] h-[414px] left-[7px] top-[34px] bg-[#041d37]/50 dark:bg-[#1669BE]" />
                    </div>
                  </div>
                </div>
                <div className="w-[526px]">
                  <div className="text-center text-black text-base font-normal font-['Montserrat'] dark:text-white">
                    PT. MOJADI APLIKASI INDONESIA
                  </div>
                  <div className="w-[18px] h-[17px] left-0 top-[-20px] relative bg-[#041d37] rounded-full dark:bg-[#1669BE]" />
                  <div className="flex flex-row xl:flex-row mb-5">
                    <div className="w-1.5">
                      <div className="w-[482px] left-[44px] relative text-black text-base font-normal font-['Montserrat'] text-justify dark:text-white">
                        Officiis eligendi itaque labore et dolorum mollitia
                        officiis optio vero. Quisquam sunt adipisci omnis et ut.
                        Nulla accusantium dolor incidunt officia tempore. Et
                        eius omnis. Cupiditate ut dicta maxime officiis quidem
                        quia. Sed et consectetur qui quia repellendus itaque
                        neque. Officiis eligendi itaque labore et dolorum
                        mollitia officiis optio vero. Quisquam sunt adipisci
                        omnis et ut. Nulla accusantium dolor incidunt officia
                        tempore. Et eius omnis. Cupiditate ut dicta maxime
                        officiis quidem quia. Sed et consectetur qui quia
                        repellendus itaque neque.Officiis eligendi itaque labore
                        et dolorum mollitia officiis optio vero. Quisquam sunt
                        adipisci omnis et ut. Nulla accusantium dolor incidunt
                        officia tempore. Et eius omnis. Cupiditate ut dicta
                        maxime officiis quidem quia. Sed et consectetur qui quia
                        repellendus itaque neque.Officiis eligendi itaque labore
                        et dolorum mollitia officiis optio vero. Quisquam sunt
                        adipisci omnis et ut. Nulla accusantium dolor incidunt
                        officia tempore. Et eius omnis. Cupiditate ut dicta
                        maxime officiis quidem quia. Sed et consectetur qui quia
                        repellendus itaque neque.
                      </div>
                    </div>
                    <div className="w-1.5">
                      <div className="w-[3px] h-[414px] left-[7px] top-[34px] bg-[#041d37]/50 dark:bg-[#1669BE]" />
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="w-full h-[93px] bg-[#041d37]/50 dark:bg-[#1669BE]" />
                </div>
              </div>
            </div>
          </div>

          {/* Mobile UI */}
          <div className="md:hidden flex flex-col">
            <div className="place-self-center top-[72px] relative text-center text-black text-5xl font-extrabold font-['Montserrat'] dark:text-white">
              MY <br />
              EXPERIENCES
            </div>
            <div className="w-[400px] h-[400px] top-[100px] place-self-center relative ml-28">
              <div className="w-[400px] h-[400px] left-[-50px] top-[8px] absolute">
                <Image
                  className="absolute"
                  src={"/backdrop.png"}
                  height={400}
                  width={400}
                  alt="backdrop"
                />
              </div>
              <Image
                className="w-[300px] h-[244px] left-2 top-0 absolute"
                src={"/man-working.png"}
                height={244}
                width={300}
                alt="man-working"
              />
            </div>

            <div className="w-full mt-40 mb-16">
              <div className="w-full h-full relative flex flex-col">
                <div className="w-[526px]">
                  <div className="text-center text-black text-base font-normal font-['Montserrat'] dark:text-white">
                    PT. MOJADI APLIKASI INDONESIA
                  </div>
                  <div className="w-[18px] h-[17px] left-0 top-[-20px] relative bg-[#041d37] rounded-full dark:bg-[#1669BE]" />
                  <div className="flex flex-row xl:flex-row mb-5">
                    <div className="w-1.5">
                      <div className="w-[475px] left-[44px] relative text-black text-base font-normal font-['Montserrat'] text-justify dark:text-white">
                        Officiis eligendi itaque labore et dolorum mollitia
                        officiis optio vero. Quisquam sunt adipisci omnis et ut.
                        Nulla accusantium dolor incidunt officia tempore. Et
                        eius omnis. Cupiditate ut dicta maxime officiis quidem
                        quia. Sed et consectetur qui quia repellendus itaque
                        neque. Officiis eligendi itaque labore et dolorum
                        mollitia officiis optio vero. Quisquam sunt adipisci
                        omnis et ut. Nulla accusantium dolor incidunt officia
                        tempore. Et eius omnis. Cupiditate ut dicta maxime
                        officiis quidem quia. Sed et consectetur qui quia
                        repellendus itaque neque.Officiis eligendi itaque labore
                        et dolorum mollitia officiis optio vero. Quisquam sunt
                        adipisci omnis et ut. Nulla accusantium dolor incidunt
                        officia tempore. Et eius omnis. Cupiditate ut dicta
                        maxime officiis quidem quia. Sed et consectetur qui quia
                        repellendus itaque neque.Officiis eligendi itaque labore
                        et dolorum mollitia officiis optio vero. Quisquam sunt
                        adipisci omnis et ut. Nulla accusantium dolor incidunt
                        officia tempore. Et eius omnis. Cupiditate ut dicta
                        maxime officiis quidem quia. Sed et consectetur qui quia
                        repellendus itaque neque.
                      </div>
                    </div>
                    <div className="w-1.5">
                      <div className="w-[3px] h-[414px] left-[7px] top-[34px] bg-[#041d37]/50 dark:bg-[#1669BE]" />
                    </div>
                  </div>
                </div>
                <div className="w-[526px]">
                  <div className="text-center text-black text-base font-normal font-['Montserrat'] dark:text-white">
                    PT. MOJADI APLIKASI INDONESIA
                  </div>
                  <div className="w-[18px] h-[17px] left-0 top-[-20px] relative bg-[#041d37] rounded-full dark:bg-[#1669BE]" />
                  <div className="flex flex-row xl:flex-row mb-5">
                    <div className="w-1.5">
                      <div className="w-[475px] left-[44px] relative text-black text-base font-normal font-['Montserrat'] text-justify dark:text-white">
                        Officiis eligendi itaque labore et dolorum mollitia
                        officiis optio vero. Quisquam sunt adipisci omnis et ut.
                        Nulla accusantium dolor incidunt officia tempore. Et
                        eius omnis. Cupiditate ut dicta maxime officiis quidem
                        quia. Sed et consectetur qui quia repellendus itaque
                        neque. Officiis eligendi itaque labore et dolorum
                        mollitia officiis optio vero. Quisquam sunt adipisci
                        omnis et ut. Nulla accusantium dolor incidunt officia
                        tempore. Et eius omnis. Cupiditate ut dicta maxime
                        officiis quidem quia. Sed et consectetur qui quia
                        repellendus itaque neque.Officiis eligendi itaque labore
                        et dolorum mollitia officiis optio vero. Quisquam sunt
                        adipisci omnis et ut. Nulla accusantium dolor incidunt
                        officia tempore. Et eius omnis. Cupiditate ut dicta
                        maxime officiis quidem quia. Sed et consectetur qui quia
                        repellendus itaque neque.Officiis eligendi itaque labore
                        et dolorum mollitia officiis optio vero. Quisquam sunt
                        adipisci omnis et ut. Nulla accusantium dolor incidunt
                        officia tempore. Et eius omnis. Cupiditate ut dicta
                        maxime officiis quidem quia. Sed et consectetur qui quia
                        repellendus itaque neque.
                      </div>
                    </div>
                    <div className="w-1.5">
                      <div className="w-[3px] h-[414px] left-[7px] top-[34px] bg-[#041d37]/50 dark:bg-[#1669BE]" />
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="w-full h-[93px] bg-[#041d37]/50 dark:bg-[#1669BE] " />
                </div>
              </div>
            </div>
          </div>
        </div>
      </DefaultLayout>
    </div>
  );
}
