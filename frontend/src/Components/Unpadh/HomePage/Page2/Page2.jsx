import Page2card from "./Page2card";

export default function Page2() {
  const rows = 4;
  const cols = 4;

  return (
    <>
      <section className="justify-center items-center  mt-16  w-full mx-auto">
        {/* Left Side  */}
        <div className="text-center">
          <div className="font-Poppins dark:text-white font-semibold text-4xl">
            <h1>
              Start Learning with{" "}
              <span className="text-background ">Uredx</span>
              <br /> and achieve your goals
            </h1>
          </div>
          {/* <div className="absolute w-[80px] h-[75px] bg-background rounded-[15px] top-[150px]">

          </div> */}
        </div>

        {/* Right Side  */}
        <div className="container flex flex-col items-center pt-16 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-center">
            {/* images  */}
            <div
              data-aos="fade-left"
              className="items-center relative justify-center "
            >
              <img src="/Group 17.png" alt="" className="relative z-10" />
              <div className="absolute w-[80px] z-0 inset- h-[75px] bg-background rounded-full -top-5 -left-5"></div>
            </div>
            {/* text container  */}
            <div
              data-aos="fade-right"
              className=" font-Poppins text-lg font-medium dark:text-white "
            >
              <h1>
                Some of the benefits that you will get if you join us and become
                a<br />
                passionate student, you will get insight and knowledge as well
                as
                <br />
                relationships and international certificates
              </h1>
              <Page2card />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
