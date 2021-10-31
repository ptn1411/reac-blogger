const UseScript = () => {

    const script1 = document.createElement("script");
    script1.setAttribute("type", "text/javascript");
    script1.src = "https://ptn1411.github.io/TinyMCE/tinymce/tinymce.min.js";
    script1.async = true;
    document.head.appendChild(script1);

    const script = document.createElement("script");
    script.setAttribute("type", "text/javascript");
    script.src = "https://ptn1411.github.io/TinyMCE/tinymce/edit.js";
    script.async = true;
    document.head.appendChild(script);

    const linkElement = document.createElement("link");
    linkElement.setAttribute("rel", "stylesheet");
    linkElement.setAttribute("type", "text/css");
    linkElement.setAttribute(
        "href",
        "https://ptn1411.github.io/TinyMCE/tinymce/skins/ui/oxide/skin.min.css"
    );
    document.head.appendChild(linkElement);
}

export default UseScript;