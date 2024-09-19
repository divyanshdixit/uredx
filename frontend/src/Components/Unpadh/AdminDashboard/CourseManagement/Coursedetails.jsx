import { Grid } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
const options = [
  {
    picture: "/Mern.png",
    name: "Become Web Developer Using Mern",
    price: "रु4999",
    course: "Mern Stack",
    teacher: "Virendra Kumar",
    published: "2024-01-01",
  },
  {
    picture: "/Mern.png",
    name: "C++ with DSA",
    price: "रु3999",
    course: "Mern Stack",
    teacher: "Virendra Kumar",
    published: "2024-01-01",
  },
  {
    picture: "/Mern.png",
    name: "Java for beginner",
    price: "रु4999",
    course: "Mern Stack",
    teacher: "Virendra Kumar",
    published: "2024-01-01",
  },
  {
    picture: "/Mern.png",
    name: "Business analytics",
    price: "रु4999",
    course: "Mern Stack",
    teacher: "Virendra Kumar",
    published: "2024-01-01",
  },
  {
    picture: "/Mern.png",
    name: "Cloud Computing",
    price: "रु399",
    course: "Mern Stack",
    teacher: "Virendra Kumar",
    published: "2024-01-01",
  },

  // Add more course objects as needed
];

const Coursedetails = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <div>
        <h1 className="text-[18px] md:text-[22px] lg:text-[24px] leading-[24px] font-medium">
          Course Details
        </h1>
        <div className="mt-[15px] border-t-[1px] border-[gray] pb-[10px] pt-[10px]">
          <Grid container spacing={2} justifyContent="space-between">
            <Grid item xs={12} sm={4} md={2}></Grid>
            <Grid item xs={12} sm={4} md={2}>
              <h2>Course Name</h2>
            </Grid>
            <Grid item xs={12} sm={4} md={2}>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <NativeSelect
                    defaultValue=""
                    inputProps={{
                      name: "age",
                      id: "uncontrolled-native",
                    }}
                    sx={{
                      "& .MuiNativeSelect-root": {
                        borderBottom: "none",
                      },
                      "&:before, &:after": {
                        borderBottom: "none",
                      },
                      "&:hover:not(.Mui-disabled):before": {
                        borderBottom: "none",
                      },
                      "& select": {
                        textAlign: "center",
                        textAlignLast: "center",
                        paddingRight: "10px",
                      },
                      "& .MuiNativeSelect-icon": {
                        right: "50px",
                      },
                    }}
                  >
                    <option value="" disabled>
                      Price
                    </option>
                    <option value={10}>रु4999</option>
                    <option value={20}>रु3999</option>
                    <option value={30}>रु2999</option>
                  </NativeSelect>
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4} md={2}>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <NativeSelect
                    defaultValue=""
                    inputProps={{
                      name: "category",
                      id: "uncontrolled-native",
                    }}
                    sx={{
                      "& .MuiNativeSelect-root": {
                        borderBottom: "none",
                      },
                      "&:before, &:after": {
                        borderBottom: "none",
                      },
                      "&:hover:not(.Mui-disabled):before": {
                        borderBottom: "none",
                      },
                      "& select": {
                        textAlign: "center",
                        textAlignLast: "center",
                        paddingRight: "16px",
                      },
                      "& .MuiNativeSelect-icon": {
                        right: "50px",
                      },
                    }}
                  >
                    <option value="Category" disabled>
                      Category
                    </option>
                    <option value={10}>MERN</option>
                    <option value={20}>C++</option>
                    <option value={30}>PYTHON</option>
                    <option value={40}>CLOUD</option>
                  </NativeSelect>
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4} md={2}>
              <h2>Teacher</h2>
            </Grid>
            <Grid item xs={12} sm={4} md={2}>
              <h2>Published on</h2>
            </Grid>
          </Grid>
        </div>
        <div>
          <div className="border-t-[1px] border-b-[1px] border-[gray] pt-[15px]">
            {options.map((course, index) => (
              <div
                key={index}
                className={`mb-[20px] ${
                  index === 0 || index === 1 || index === 2 || index === 3
                    ? "border-b-[1px] border-[gray] pb-[15px]"
                    : ""
                }`}
              >
                <Grid container spacing={2}>
                  <Grid
                    item
                    xs={12}
                    sm={4}
                    md={2}
                    className="flex justify-center"
                  >
                    <img
                      src={course.picture}
                      alt=""
                      className="w-[160px] h-[90px] object-cover"
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={4}
                    md={2}
                    className="flex flex-col items-center"
                  >
                    <p className="text-center">{course.name}</p>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={4}
                    md={2}
                    className="flex flex-col items-center"
                  >
                    <p className="text-center ml-[55px]">{course.price}</p>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={4}
                    md={2}
                    className="flex flex-col items-center"
                  >
                    <p className="text-center ml-[55px]">{course.course}</p>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={4}
                    md={2}
                    className="flex flex-col items-center"
                  >
                    <p className="text-center">{course.teacher}</p>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={4}
                    md={2}
                    className="flex flex-col items-center"
                  >
                    <p className="text-center">{course.published}</p>
                  </Grid>
                </Grid>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Coursedetails;
