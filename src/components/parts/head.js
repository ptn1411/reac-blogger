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

            <meta name="description" content="__META_DESCRIPTION__"/>
            <meta name="og:title" content="__META_OG_TITLE__"/>
            <meta property="og:url" content="__META_OG_URL__" />
            <meta property="og:site_name" content="__META_OG_SITE_NAME__" />
            <meta name="og:description" content="__META_OG_DESCRIPTION__"/>
            <meta name="og:image" content="__META_OG_IMAGE__"/>

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