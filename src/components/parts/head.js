import {Helmet} from 'react-helmet-async';
import favicon from "../../assets/favicon.ico";
import logo from "../../assets/logo192.png";

const HeadMeta = () => (
    <Helmet prioritizeSeoTags>
        <meta charSet="utf-8"/>
        <link rel="icon" href={favicon}/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="robots" content="noindex,nofollow"/>
        <meta
            name="description"
            content="Pham Thanh Nam"
        />
        <link rel="apple-touch-icon" href={logo}/>

        <link
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
            rel="stylesheet"
        />

        <title>React</title>
    </Helmet>
)

export default HeadMeta;