import React from "react";
import s from "./Post1.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://10wallpaper.com/wallpaper/2560x1440/2302/Avatar_The_Way_of_Water_2022_Movies_5K_Poster_2560x1440.jpg" />
    { props.message } 
      <div>
        <span>like</span>
      </div>
    </div>
  )
}

export default Post;
