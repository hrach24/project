import classes from "./Home.module.scss";
import Finance from "../../components/finance/Finance";
import Cards from "../../components/cards/Card";
import Design from "../../components/design/Design";
import Practice from "../../components/practice/Practice";
import About from "../../components/about/About";
import NewsLetter from "../../components/newsLetter/NewsLetter";
import GetInTouch from "../../components/getInTouch/GetInTouch";

export default function Home() {
    return(
        <>
            <main className={classes.content}>
                <Finance/>
                <Cards/>
                <Design />
                <Practice />
                <About />
                <NewsLetter />
                <GetInTouch />
            </main>
        </>
    )
}