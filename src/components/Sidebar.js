import { Category } from "@mui/icons-material";
import { Stack } from "@mui/system";
import React from "react";
import { categories } from "../utils/constants";


const Sidebar = ({selectedCategory , setSelectedCategory}) => {

  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((cate) => {
        return (
            <button key={cate.name} className='category-btn' 
            style={
              {
                background:cate.name===selectedCategory && '#FC1503',
                color:'white',
                transition:'0.4s',
                fontWeight:'500',
                display:'felx',
                
              }
            }
            onClick={() => setSelectedCategory(cate.name)}
            >
              <span
              style={
                {
                  // this plus to hover effect .
                  color:cate.name === selectedCategory ? 'white' : 'red',
                  margin:'0px 10px',
                }
              }
              >{cate.icon}</span>
              <span style={
                {
                  opacity: cate.name === selectedCategory ? 1 : '0.8'
                }
              }
              >{cate.name}</span>
            </button>   
        );
      })}
    </Stack>
  );
};
export default Sidebar;
