import {Editor} from '@tinymce/tinymce-react';

// TinyMCE so the global var exists
// eslint-disable-next-line no-unused-vars
import tinymce from 'tinymce/tinymce';

// Theme
import 'tinymce/themes/silver';
// Toolbar icons
import 'tinymce/icons/default';
// Editor styles
import 'tinymce/skins/ui/oxide/skin.min.css';

// importing the plugin js.
import 'tinymce/plugins/advlist';
import 'tinymce/plugins/autolink';
import 'tinymce/plugins/link';
import 'tinymce/plugins/image';
import 'tinymce/plugins/lists';
import 'tinymce/plugins/charmap';
import 'tinymce/plugins/hr';
import 'tinymce/plugins/anchor';
import 'tinymce/plugins/searchreplace';
import 'tinymce/plugins/wordcount';
import 'tinymce/plugins/code';
import 'tinymce/plugins/fullscreen';
import 'tinymce/plugins/insertdatetime';
import 'tinymce/plugins/media';
import 'tinymce/plugins/nonbreaking';
import 'tinymce/plugins/table';
import 'tinymce/plugins/template';
import 'tinymce/plugins/help';
import 'tinymce/plugins/textcolor';
import 'tinymce/plugins/codesample';
import 'tinymce/plugins/imagetools';
import 'tinymce/plugins/paste';
import 'tinymce/plugins/visualblocks';
import 'tinymce/plugins/print';
import 'tinymce/plugins/preview';
import 'tinymce/plugins/toc';
import 'tinymce/plugins/visualchars';
import 'tinymce/plugins/textpattern';
import 'tinymce/plugins/colorpicker';
import 'tinymce/plugins/contextmenu';
import 'tinymce/plugins/fullpage';
import 'tinymce/plugins/directionality';


const TinyEditorComponent = (props) => {

    const handleEditorChange = (editor) => props.onChange(editor);
    return (
        <>
            <Editor
                value={props.value}
                onEditorChange={handleEditorChange}
                init={{
                    height: 700,
                    skin: false,
                    menubar: 'file edit view insert format tools table help',
                    file_picker_types: 'image',
                    plugins: [
                        'print preview fullpage searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr nonbreaking anchor toc insertdatetime advlist lists textcolor wordcount imagetools contextmenu colorpicker textpattern help'
                    ],

                    image_title: true,
                    automatic_uploads: true,
                    toolbar: 'undo redo | formatselect | fontselect| fontsizeselect  |' +
                        'bold italic underline backcolor forecolor  | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | link image | codesample | help | table',

                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                    fontsize_formats: "8pt 10pt 12pt 14pt 18pt 24pt 36pt",
                    font_formats:
                        "Andale Mono=andale mono,times; Arial=arial,helvetica," +
                        "sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino;" +
                        " Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino;" +
                        " Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; " +
                        "Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva;" +
                        " Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats",
                    codesample_languages: [
                        {text: 'HTML/XML', value: 'markup'},
                        {text: 'JavaScript', value: 'javascript'},
                        {text: 'CSS', value: 'css'},
                        {text: 'PHP', value: 'php'},
                        {text: 'Ruby', value: 'ruby'},
                        {text: 'Python', value: 'python'},
                        {text: 'Java', value: 'java'},
                        {text: 'C', value: 'c'},
                        {text: 'C#', value: 'csharp'},
                        {text: 'C++', value: 'cpp'}
                    ],
                    file_browser_callback_types: 'file image media',
                    deprecation_warnings: false,

                    link_list: [
                        {title: 'Website', value: 'https://www.phamthannam.com'},
                        {title: 'Github', value: 'https://github.com/ptn1411'},
                        {title: 'Facebook', value: 'https://www.facebook.com/ptn1411/'}
                    ],
                    image_list: [
                        {title: 'Nyan cat', value: 'https://jackrusher.com/images/journal/what-does-it-mean-to-buy-a-gif/nyan-cat.gif'},
                        {title: 'Facebook', value: 'https://www.facebook.com/ptn1411/'}
                    ],
                    image_class_list: [
                        {title: 'None', value: ''},
                        {title: 'Some class', value: 'class-name'}
                    ],
                    importcss_append: true,
                    templates: [
                        {
                            title: 'New Table',
                            description: 'creates a new table',
                            content: '<div class="mceTmpl"><table width="98%%"  border="0" cellspacing="0" cellpadding="0"><tr><th scope="col"> </th><th scope="col"> </th></tr><tr><td> </td><td> </td></tr></table></div>'
                        },
                        {
                            title: 'Starting my story',
                            description: 'A cure for writers block',
                            content: 'Once upon a time...'
                        },
                        {
                            title: 'New list with dates',
                            description: 'New List with dates',
                            content: '<div class="mceTmpl"><span class="cdate">cdate</span><br /><span class="mdate">mdate</span><h2>My List</h2><ul><li></li><li></li></ul></div>'
                        }
                    ],
                    template_cdate_format: '[Date Created (CDATE): %m/%d/%Y : %H:%M:%S]',
                    template_mdate_format: '[Date Modified (MDATE): %m/%d/%Y : %H:%M:%S]',
                    file_picker_callback: function (cb, value, meta) {
                        var input = document.createElement('input');
                        input.setAttribute('type', 'file');
                        input.setAttribute('accept', 'image/*');

                        input.onchange = function () {
                            var file = this.files[0];

                            var reader = new FileReader();
                            reader.onload = function () {

                                var id = 'blobid' + (new Date()).getTime();
                                var blobCache = tinymce.activeEditor.editorUpload.blobCache;
                                var base64 = reader.result.split(',')[1];
                                var blobInfo = blobCache.create(id, file, base64);
                                blobCache.add(blobInfo);

                                cb(blobInfo.blobUri(), {title: file.name});
                            };
                            reader.readAsDataURL(file);
                        };

                        input.click();
                    },
                }}
            />
        </>
    );
}
export default TinyEditorComponent;
