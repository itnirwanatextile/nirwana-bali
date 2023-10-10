import MyForm from "./Form";
import ChevronDown from "./assets/chevron-down.svg";

function App() {
  return (
    <>
      <div className="w-full snap-y h-screen overflow-y-scroll relative">
        <div className="bg-main-bg bg-no-repeat bg-cover w-full min-h-screen px-2 min-[375px]:px-5 py-[70px] h-full snap-center">
          <div className="flex flex-col gap-10 items-center text-center h-full">
            <div className="max-w-[100px] mx-auto">
              <img
                src="../img/LOGONT2PUTIH.png"
                className="w-full h-full"
                alt="Nirwana Textile"
              />
            </div>
            <div className="h-[60vh] flex flex-col gap-10 justify-center">
              <div>
                <p className="font-gotham">YOU ARE INVITED TO A</p>
                <p className="font-roxborough text-3xl min-[375px]:text-4xl font-bold text-[#E5B465] tracking-wider">
                  GRAND OPENING STORE
                </p>
              </div>
              <div>
                <h2 className="font-times text-[#E5B465] text-xl tracking-wide">
                  NIRWANA FABRIC OUTLET
                </h2>
                <div className="py-5">
                  <img
                    src="../img/divider.png"
                    alt="divider"
                    className="translate-y-0.5"
                  />
                  <div className="flex text-[#FAF0B2] justify-evenly items-center font-times tracking-wide">
                    <span className="min-[375px]:text-lg">SATURDAY</span>
                    <div className="border-l border-[#D1B15C] h-28 mr-1" />
                    <div className="flex flex-col font-bold">
                      <span className="tracking-wider">OCT</span>
                      <span className="text-6xl tracking-wide leading-[0.8] translate-x-0.5">
                        21
                      </span>
                      <span className="tracking-wider">2023</span>
                    </div>
                    <div className="border-l border-[#D1B15C] h-28 ml-1" />
                    <span className="min-[375px]:text-lg">AT 09.00 AM</span>
                  </div>
                  <img
                    src="../img/divider.png"
                    alt="divider"
                    className="-translate-y-0.5"
                  />
                </div>
                <div className="flex flex-col text-[#FAF0B2] font-times gap-2">
                  <span className="font-bold">LOCATION :</span>
                  <a
                    href="https://maps.app.goo.gl/8AihwiD1Px1GfJqLA"
                    target="_blank"
                  >
                    JL. IMAM BONJOL NO.332, DENPASAR, BALI
                  </a>
                </div>
              </div>
            </div>
            <a className="absolute bottom-0 mb-20 animate-bounce" href="#form">
              <img src={ChevronDown} className="w-10" />
            </a>
          </div>
        </div>
        <MyForm />
      </div>
    </>
  );
}

export default App;
