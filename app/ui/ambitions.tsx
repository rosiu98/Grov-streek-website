import Image from "next/image";
import DruzynaImage from "@/public/ambicje_druzyna.png";

const Ambitions = () => {
  return (
    <section id="ambitions" className="pt-[100px] lg:pt-[140px] pb-10">
      <div className="w-full bg-black text-white py-[100px]">
        <div className="max-w-app">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
            <div>
              <div className="mb-10">
                <h3 className="text-3xl font-extrabold">Ambicje druzyny</h3>
              </div>
              <div className="mb-12">
                <p className="text-md md:text-xl max-w-[680px] w-full">
                  Ambicje drużyny Grove Street Ballers wykraczają poza granice
                  boiska. Naszym celem jest nie tylko osiągnięcie sukcesów
                  sportowych, ale także inspirowanie innych do dążenia do
                  doskonałości. Jesteśmy zespołem, który nie boi się wyzwań i
                  gotowy jest pokonać każdą przeszkodę, wspierając się nawzajem
                  na drodze do realizacji marzeń. Nasza determinacja, pasja i
                  nieustępliwość sprawią, że osiągniemy to, na co pracujemy,
                  tworząc niezapomnianą historię&nbsp;koszykówki.
                </p>
              </div>
              <div>
                <p className="italic text-md">- Trener wraz z druzyną!</p>
              </div>
            </div>
            <div className="flex justify-center md:justify-end items-end ">
              <Image
                src={DruzynaImage.src}
                width={594}
                height={324}
                alt="Grove Street Ballerz Druzyna"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ambitions;
