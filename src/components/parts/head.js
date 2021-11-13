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
            <meta property="og:title" content={title} />
            <meta property="og:url" content="https://phamthanhnam.com" />
            <meta property="og:site_name" content="phamthanhnam.com" />
            <meta property="og:image:width" content="600" />
            <meta property="og:image:height" content="315" />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={logo} />
            <link
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
                rel="stylesheet"
            />
            <title>{title}</title>
        </Helmet>
    )
}

export default HeadMeta;