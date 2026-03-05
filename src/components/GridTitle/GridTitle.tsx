import GridTitleDesktop from "./GridTitleDesktop";
import GridTitleMobile from "./GridTitleMobile";

const GridTitle = () => {
    return (
        <>
            <div className="hidden lg:block">
                <GridTitleDesktop />
            </div>
            <div className="lg:hidden">
                <GridTitleMobile />
            </div>
        </>
    );
};

export default GridTitle;
