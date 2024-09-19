import React, { useRef, useState } from "react";
import { TextField, Autocomplete } from "@mui/material";
import { useNavigate } from "react-router-dom";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Addcoursetab from "./addcoursefiles/tabs/Addcoursetab";


const Addcourse = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [addField, setAddField] = useState([0]);

  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const handleFileClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    if (files.length) {
      setUploadedFiles((prevFiles) => [...prevFiles, ...files]);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files);
    if (files.length) {
      setUploadedFiles((prevFiles) => [...prevFiles, ...files]);
    }
  };

  const handleDeleteFile = (index) => {
    setUploadedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const handleShowFile = (file) => {
    const fileURL = URL.createObjectURL(file);
    window.open(fileURL);
  };

  const Category = [
    { label: "Business", value: "Business" },
    { label: "Finance & Accounting", value: "Finance & Accounting" },
    { label: "IT & Software", value: "IT & Software" },
    { label: "Office Productivity", value: "Office Productivity" },
    { label: "Personal Development", value: "Personal Development" },
    { label: "Marketing", value: "Marketing" },
    { label: "Lifestyle", value: "Lifestyle" },
    { label: "Photography & Video", value: "Photography & Video" },
    { label: "Health & Fitness", value: "Health & Fitness" },
    { label: "Music", value: "Music" },
    { label: "Teaching & Academics", value: "Teaching & Academics" },
  ];
  const Tags = [
    { label: "Mens Clothing", value: "Mens Clothing" },
    { label: "Woman's Clothing", value: "Woman's Clothing" },
    { label: "Business", value: "Business" },
  ];

  return (
    <div className="w-full p-[10px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {/* Left Column */}
        <div className="col-span-1">
          <h1 className="text-[24px] md:text-[26px] lg:text-[28px] font-bold">
            Add a Course
          </h1>
          <p className="text-gray-600">Orders placed across your store</p>

          <div className="w-full mt-[12px]">
            <h1 className="text-[16px] md:text-[18px] lg:text-[20px] font-semibold">
              Course Title
            </h1>
            <input
              type="text"
              placeholder="Write title here..."
              className="bg-white border border-gray-300 rounded p-[10px] w-full mt-[10px]"
            />
          </div>

          <div className="mt-[12px]">
            <h1 className="text-[16px] md:text-[18px] lg:text-[20px] font-semibold">
              Course Description
            </h1>
            <textarea
              placeholder="Write description here..."
              className="bg-white border border-gray-300 rounded p-[10px] w-full mt-[10px] h-[180px]"
            ></textarea>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-span-1">
          <div className="flex justify-around items-center gap-[20px]">
            <button className="gary_btn border_gray font-bold text-[12px] md:text-[14px] lg:text-[16px]">
              Discard
            </button>
            <button className="gary_btn border_gray font-bold text-blue-500 text-[12px] md:text-[14px] lg:text-[16px]">
              Save Draft
            </button>
            <button className="site_btn text-[12px] md:text-[14px] lg:text-[16px]">
              Publish Course
            </button>
          </div>

          <div className="mt-[50px] ml-[28px]">
            <h1 className="text-[16px] md:text-[18px] lg:text-[20px]">
              Organize
            </h1>
            <div className="mt-[70px]">
              <label>
                Category{" "}
                <span className="text-blue-500 hover:underline ml-[5px]">
                  Add new category
                </span>
              </label>
              <Autocomplete
                disablePortal
                id="Department"
                name="Department"
                className="mt-[10px]"
                sx={{ "& .MuiInputBase-root": { padding: "2px" } }}
                options={Category}
                renderInput={(params) => (
                  <TextField {...params} placeholder="Select your course" />
                )}
              />
            </div>
            <div className="mt-[40px]">
              <label>
                Tags{" "}
                <span className="text-blue-500 hover:underline ml-[5px]">
                  View all tags
                </span>
              </label>
              <Autocomplete
                disablePortal
                id="Tags"
                name="Tags"
                className="mt-[10px]"
                sx={{ "& .MuiInputBase-root": { padding: "2px" } }}
                options={Tags}
                renderInput={(params) => (
                  <TextField {...params} placeholder="Select your course" />
                )}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="form_fields flex justify-between flex-wrap gap-[15px]">
        {addField.map((item, index) => (
          <React.Fragment key={index}>
            <div className="w-[100%] rounded bg-[#e4f8ef] mt-[15px]">
              <div className="p-[20px] h-[calc(100vh - 90px)] flex flex-col">
                <div
                  className="w-full rounded-lg border border-dashed flex flex-col justify-center items-center py-[4px] border-[#666666] h-[200px]"
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                  onClick={handleFileClick}
                  style={{ cursor: "pointer" }}
                >
                  <div className="flex flex-col items-center">
                    <UploadFileIcon
                      className="text-blue-500"
                      style={{ width: "50px", height: "50px" }}
                    />
                    <span className="text-[20px] text-blue-500 hover:underline">
                      Upload File
                    </span>
                    <p className="text-[#545454] text-center text-[14px] md:text-[16px] lg:text-[18px] font-medium mt-[1px]">
                      Choose files or Drag them here.
                    </p>
                    <p className="text-[#A4A4A4] text-center text-[12px] md:text-[14px] lg:text-[15px] font-medium mt-[15px]">
                      Support JPEG, JPG, PNG, SVG, WORD, PDF
                    </p>
                  </div>
                  <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                    accept=".docx,.pdf"
                    multiple
                  />
                </div>

                {uploadedFiles.length > 0 && (
                  <div className="mt-[15px]">
                    <span className="text-[12px] md:text-[14px] lg:text-[16px] font-medium">
                      Uploaded Files
                    </span>
                    {uploadedFiles.map((file, index) => (
                      <div
                        key={index}
                        className="grid grid-cols-12 gap-[15px] mt-[10px]"
                      >
                        <div className="col-span-11 flex justify-between items-center rounded border border-solid bg-[#fff] border-[#BBB] py-[10px] px-[15px]">
                          <p className="text-[#333333] text-lg">{file.name}</p>
                          <div>
                            <button
                              className="ml-4 border border-[#1C85E8] px-1 rounded"
                              onClick={() => handleShowFile(file)}
                            >
                              <RemoveRedEyeIcon
                                className="text-blue-500"
                                style={{ width: "20px", height: "20px" }}
                              />
                            </button>
                          </div>
                        </div>
                        <div className="col-span-1">
                          <button
                            className="bg-[#FFE2E2] text-white px-[8px] py-[9px] rounded"
                            onClick={() => handleDeleteFile(index)}
                          >
                            <DeleteIcon
                              style={{
                                width: "30px",
                                height: "30px",
                                color: "red",
                              }}
                            />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
      <Addcoursetab/>
    </div>
  );
};

export default Addcourse;
