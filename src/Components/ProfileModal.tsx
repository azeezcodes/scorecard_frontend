import { useEffect, useState } from "react";
import { logoutUser } from "../utils/api";
import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { TbArrowBarRight } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

import "./component.css";

export const ProfileModal = () => {
   const [userDetail, setUserDetail] = useState({
      firstname: "",
      lastname: "",
      role: "",
      id: "",
   });
   const navigate = useNavigate();

   const handleChange = async () => {
      await logoutUser();
      localStorage.setItem("token", "");
      localStorage.setItem("Id", "");
      localStorage.setItem("User", "");
      localStorage.setItem("lastname", "");
      localStorage.setItem("role", "");
      navigate("/");
   };

   useEffect(() => {
      const firstname = localStorage.getItem("User");
      const lastname = localStorage.getItem("lastname");
      const role = localStorage.getItem("role");
      const id = localStorage.getItem("Id");
      console.log(firstname, lastname, id);
      setUserDetail((prev) => ({
         ...prev,
         firstname: firstname!,
         lastname: lastname!,
         role: role!,
         id: id!,
      }));
   }, []);

   return (
      <div className="profilemodal">
         <div className="personpic">
            <div className="pimg"></div>
            <div className="namework">
               <p>
                  <b>
                     {userDetail.firstname} {userDetail.lastname}
                  </b>
               </p>
               <p>{userDetail.role}</p>
            </div>
         </div>
         <hr />
         <div className="personaction">
            <Link to={`/adminprofile/${userDetail.id}`}>
               <div className="pro">
                  <AiOutlineUser /> <p>Profile</p>
               </div>
            </Link>
            <Link to="/change_password">
               <div className="pro">
                  <RiLockPasswordLine /> <p>Change Password</p>
               </div>
            </Link>
            <Link to="/login">
               <div className="pro">
                  <TbArrowBarRight /> <p onClick={handleChange}>Logout</p>
               </div>
            </Link>
         </div>
      </div>
   );
};
