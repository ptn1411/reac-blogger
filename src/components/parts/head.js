import {Helmet} from 'react-helmet-async';
import favicon from "../../assets/favicon.ico";
import logo from "../../assets/logo192.png";

const HeadMeta = (props) => {
    const {robots, keywords, title, description} = props.head;

    return (
        <Helmet prioritizeSeoTags>
            <link rel="icon" href={favicon}/>
            <meta name="robots" content={robots}/>
            <meta
                name="description"
                content={description}
            />
            <meta name="keywords" content={keywords}/>

            <link rel="apple-touch-icon" href={logo}/>

            <link
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
                rel="stylesheet"
            />
            <title>{title}</title>
        </Helmet>
    )
}

export default HeadMeta;