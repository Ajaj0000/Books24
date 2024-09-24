import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import JoditEditor from "jodit-react";

function AddItems() {
    const navigate = useNavigate();


    const editor = useRef(null);
    const [text, setText] = useState('');
    const [imagePreviewUrl, setImagePreviewUrl] = useState(null);

    const [formData, setFormData] = useState({
        parentCategory: "",
        layout: "Vertical",
        title: "",
        printer: "Printer1",
        tax: [],
        takeAway: false,
        availableAllTime: true,
        categoryIcon: null,
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData({
            ...formData,
            categoryIcon: file,
        });

        // Create a preview URL for the image file
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImagePreviewUrl(imageUrl);
        } else {
            setImagePreviewUrl(null);
        }
    };
    return (
        <>
            <div className="add-item">
                <div className="row">
                    <div className="category-nav">
                        <div className="category-text">
                            <h4>Add Item List</h4>
                        </div>
                        <div className="category-btn">
                            <button onClick={() => navigate(-1)}><RxCross1 /></button>
                        </div>
                    </div>
                    <hr />

                    <div className="add-form">
                        <form>
                            {/* Title Input */}
                            <div className="add">
                                <label>Title</label>
                                <input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleInputChange}
                                />
                            </div>

                            {/* TakeAway Checkbox */}
                            <div className="add">
                                <label>
                                    <input
                                        type="checkbox"
                                        name="takeAway"
                                        checked={formData.takeAway}
                                        onChange={handleInputChange}
                                    />
                                    Coupon Code/Rewards Application
                                </label>
                            </div>

                            {/* Category Input */}
                            <div className="add-mrp">
                             
                                <div className="add add-mrp-1" >
                                    <label>Category </label>
                                    <input
                                        type="text"
                                        placeholder="MRP"
                                    />
                                </div>
                            
                                <div className="add add-mrp-1">
                                <label>Select Parent Category</label>
                                <select name="parentCategory" value={formData.parentCategory} onChange={handleInputChange}>
                                    <option value="">Select Sub Category</option>
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                    <option value="">4</option>
                                    {/* Add more options as needed */}
                                </select>
                            </div>
                            </div>
                            {/* Category Icon File Upload */}
                            <div className="add">
                                <label>Category Icon</label>
                                <input type="file" onChange={handleFileChange} />
                                {/* Display the name of the uploaded file */}
                                {formData.categoryIcon && <p>{formData.categoryIcon.name}</p>}
                                {/* Display the uploaded image preview */}
                                {imagePreviewUrl && (
                                    <div className="image-preview">
                                        <img src={imagePreviewUrl} alt="Category Icon" style={{ height: '150px', marginTop: "10px", objectFit: 'cover' }} />
                                    </div>
                                )}
                            </div>

                            {/* MRP Input */}
                            <div className="add-mrp">
                                {/* Title Input */}
                                <div className="add add-mrp-1" >
                                    <label>MRP </label>
                                    <input
                                        type="text"
                                        placeholder="MRP"
                                    />
                                </div>
                                {/* Title Input */}
                                <div className="add add-mrp-1">
                                    <label>Selling Price</label>
                                    <input
                                        type="text"
                                        placeholder="Selling Price"
                                    />
                                </div>
                            </div>

                            {/* weight Input */}
                            <div className="add-mrp">
                                <div className="add add-mrp-1">
                                    <label>Weight</label>
                                    <input
                                        type="text"
                                        placeholder="Weight"
                                    />
                                </div>
                            </div>

                            {/* Time Availability */}
                            <div className="add">
                                <label>Time Availability</label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="availableAllTime"
                                        checked={formData.availableAllTime}
                                        onChange={handleInputChange}
                                    />
                                    Available All Time
                                </label>
                            </div>

                            {/* Jodit Editor */}
                            <div className="add">
                                <JoditEditor
                                    ref={editor}
                                    value={text}
                                    tabIndex={1} // tabIndex of textarea
                                    onChange={(newContent) => setText(newContent)}
                                />
                            </div>
                        </form>
                    </div>
                    <div className="btn">
                        <button type="submit">Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export { AddItems }