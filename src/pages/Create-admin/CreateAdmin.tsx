import "./CreateAdmin.css"
import React from 'react';
import { SimpleInput } from "../../components/SimpleInput";
import { SignupButton } from "../../components/SignupButton";
import { Selectoption } from "../../components/Selectoption";
import { DashboardLayout } from "../../layout/DashboardLayout/DashboardLayout";


const CreateAdmin = () => {
   return (
      <DashboardLayout>
         <div className="admin-container">
            <div className="headuser">
               <div className="headerCon">
                  <p>Create Admin</p>
                  <button>View all Admins</button>
               </div>
            </div>
            <div className="box-user">
               <div className="form-boxx">
                  <p className="userp">Fill in your required data</p>
                  <hr />
                  <div className="formuser">
                     <form action="">
                        <SimpleInput
                           placeholder="Enter first name"
                           name="name"
                           label="First Name"
                           type="text"
                        />
                        <SimpleInput
                           placeholder="Enter last name"
                           name="name"
                           label="Last Name"
                           type="text"
                           value=""
                        />
                        <SimpleInput
                           placeholder="Enter your email"
                           name="email"
                           label="Email"
                           type="email"
                           value=""
                        />
                        <div>
                           <label className="control-text">Stacks</label>
                           <Selectoption
                              label="stack"
                              name="string"
                              value="string"
                              handleChange="any"
                           />
                        </div>
                        <SimpleInput
                           placeholder="Select"
                           name="Assign Role"
                           label="Assign Role"
                           type="text"
                           value=""
                        />
                        <SimpleInput
                           placeholder="Squad"
                           name="squad"
                           label="Squad"
                           type="text"
                           value=""
                        />
                        <SignupButton name="Create Admin" />
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </DashboardLayout>
   );
}

export default CreateAdmin;
