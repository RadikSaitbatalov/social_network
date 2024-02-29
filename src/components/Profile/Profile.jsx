import React from "react";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {

    return (
        <div>
            <div>
                <img src="https://img.freepik.com/free-photo/breathtaking-shot-of-beautiful-stones-under-turquoise-water-of-a-lake-and-hills-in-the-background_181624-12847.jpg?w=996&t=st=1708350413~exp=1708351013~hmac=234962d1bd5a3d273b2c84fefb823a905da37a7c94ab835e28c7a31a31c49839" />
            </div>
            <div>ava + desription</div>
            <MyPosts posts={props.state.posts} />
        </div>
    )
}

export default Profile;


