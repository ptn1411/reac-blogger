import React from "react";

const Postform = (props) => {
    const {title, summary, category_id} = props.value;

    const onChangeForm = (editor) => props.onChange(editor);
    return (

        <div>
            <div className="form-group">
                <label>Title</label>
                <input type="text" className="form-control"
                       value={title}
                       onChange={onChangeForm("title")}
                       aria-describedby="emailHelp" placeholder="Title"/>
            </div>
            <div className="form-group">
                <label>Summary</label>
                <input type="text" className="form-control"
                       value={summary}
                       onChange={onChangeForm("summary")}
                       aria-describedby="emailHelp" placeholder="Summary"/>
            </div>
            <div className="form-group">
                <label>Category</label>
                <select className="form-control"
                        value={category_id}
                        onChange={onChangeForm("category_id")}
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            <div className="form-group">
                <label>Image</label>
                <input
                    onChange={onChangeForm("image")}
                    type="file"
                    accept="image/*"
                    className="form-control"
                />
            </div>

        </div>
    )
}

export default Postform;