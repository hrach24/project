import classes from "./Main.module.scss";
import Finance from "../../finance/Finance";
import Cards from "../../cards/Card";
import Design from "../../design/Design";
import Practice from "../../practice/Practice";
import About from "../../about/About";
import NewsLetter from "../../newsLetter/NewsLetter";

export default function Main() {
    return(
        <>
            <main className={classes.content}>
                <Finance/>
                <Cards/>
                <Design />
                <Practice />
                <About />
                <NewsLetter />
            </main>
        </>
    )
}