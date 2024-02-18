import { PostNoBills } from "./fonts";
import { Button } from "./button";

const HeaderTitle = () => {
  return (
    <div className="text-left">
      <p
        className={`${PostNoBills.className} text-3xl md:text-4xl leading-none mb-2`}
      >
        BASKETBALL CLUB
      </p>
      <h1
        className={`${PostNoBills.className} text-5xl sm:text-7xl md:text-8xl mb-5 font-bold leading-none`}
      >
        GROVE STREET
      </h1>
      <p className="text-xl font-medium max-w-[550px] mb-10">
        Znajdziesz tutaj aktualności, relacje z meczów, galerie zdjęć oraz wiele
        innych informacji dotyczących naszego zespołu. Dołącz do naszej
        społeczności i śledź razem z nami naszą koszykarską przygodę!
      </p>
      <div>
        <Button className="text-2xl px-7 py-5" href="#ambitions">
          WIECEJ O NAS
        </Button>
      </div>
    </div>
  );
};

export default HeaderTitle;
