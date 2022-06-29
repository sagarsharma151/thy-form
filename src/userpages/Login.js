import React, {useState, useEffect } from "react";
import { FiLogIn } from "react-icons/fi";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import DraggableList from "react-draggable-lists";
const Login = () => {
  // let items = document.querySelectorAll('.container1 .box');
  // items.forEach(function (item) {
  //   item.addEventListener('dragstart', handleDragStart);
  //   item.addEventListener('dragend', handleDragEnd);
  // });
  const [image, setImage] = useState({ preview: "", raw: "" });
  useEffect(() => {
    /* Made with love by @fitri
 This is a component of my ReactJS project
 https://codepen.io/fitri/full/oWovYj/ */

    function enableDragSort(listClass) {
      const sortableLists = document.getElementsByClassName(listClass);
      Array.prototype.map.call(sortableLists, (list) => {
        enableDragList(list);
      });
    }

    function enableDragList(list) {
      Array.prototype.map.call(list.children, (item) => {
        enableDragItem(item);
      });
    }

    function enableDragItem(item) {
      item.setAttribute("draggable", true);
      item.ondrag = handleDrag;
      item.ondragend = handleDrop;
    }

    function handleDrag(item) {
      const selectedItem = item.target,
        list = selectedItem.parentNode,
        x = window.event.clientX,
        y = window.event.clientY;

      selectedItem.classList.add("drag-sort-active");
      let swapItem =
        document.elementFromPoint(x, y) === null
          ? selectedItem
          : document.elementFromPoint(x, y);

      if (list === swapItem.parentNode) {
        swapItem =
          swapItem !== selectedItem.nextSibling
            ? swapItem
            : swapItem.nextSibling;
        list.insertBefore(selectedItem, swapItem);
      }
    }

    function handleDrop(item) {
      item.target.classList.remove("drag-sort-active");
    }

    (() => {
      enableDragSort("drag-sort-enable");
    })();
  }, []);
 

  const handleChange = e => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0]
      });
    }
  };
  
  return (
    <>
      <div class="container-scroller">
        <div class="container-fluid page-body-wrapper full-page-wrapper">
          <div class="content-wrapper d-flex align-items-stretch auth auth-img-bg">
            {/* <DraggableList width={300} height={300} rowSize={2}>
            <div  style={{ width: 300, height: 300, background: "green" }}>
              1
            </div>
            <div style={{ width: 200, height: 300, background: "blue" }}>2</div>
            <div style={{ width: 200, height: 300, background: "red" }}>3</div>
          </DraggableList> */}
            <div class="row flex-grow login-bg drag-sort-enable">
              {/* <DraggableList> */}
              <div
                class="col-lg-8 login-half-bg d-flex flex-row box"
                draggable="true"
              >
                <p class="text-white font-weight-medium text-center flex-grow align-self-end">
                  Copyright &copy; 2021 All rights reserved.
                </p>
              </div>
              <div
                class="col-lg-4 d-flex align-items-center justify-content-center box"
                draggable="true"
              >
                <div class="auth-form-transparent auth-form-transparents text-left p-3">
                  <div class="brand-logo brand-logo-main">
                    <div className="brand-logo1">
                    {image.preview ? (
          <img src={image.preview} alt="dummy" className="upload-img" />
        ) : (
          <>
            <span className="linear"></span>
                <b className="bold-letter" style={{fontSize:'25px'}}>ThyForm</b>{" "}
                {/* <span className="admin-letter" style={{fontSize:'20px'}}>Admin</span> */}
          </>
        )}
                      <h6 class="fw-light login-heading">
                        Happy to see you again!
                      </h6>
                    </div>
                    <div className="icon change-logo-btn">
              <label htmlFor="upload-button">
              <FiLogIn
                      style={{
                        width: "55px",
                        height: "auto",
                        color: "#ced4da",
                        cursor:'pointer'
                      }}
                    />
      </label>
      <input
        type="file"
        id="upload-button"
        style={{ display: "none" }}
        onChange={handleChange}
      />
                
                  </div>
               
              </div>
      
                  {/* <h4>Welcome back!</h4> */}

                  <form class="pt-3">
                    <div class="form-group">
                      {/* <label for="exampleInputEmail">Username</label> */}
                      <div class="input-group">
                        {/* <div class="input-group-prepend bg-transparent">
                      <span class="input-group-text bg-transparent border-right-0">
                        <i class="ti-user text-primary"></i>
                      </span>
                    </div> */}
                        <input
                          type="text"
                          className="form-control  border-left-0  input-login"
                          id="exampleInputEfmail"
                          placeholder="Username"
                        />
                      </div>
                    </div>
                    <div class="form-group">
                      {/* <label for="exampleInputPassword">Password</label> */}
                      <div class="input-group">
                        {/* <div class="input-group-prepend bg-transparent">
                      <span class="input-group-text bg-transparent border-right-0">
                        <i class="ti-lock text-primary"></i>
                      </span>
                    </div> */}
                        <input
                          type="password"
                          className="form-control  border-left-0 input-login"
                          id="exampleInputfPassword"
                          placeholder="Password"
                        />
                      </div>
                    </div>

                    <div class="form-group">
                      {/* <label for="exampleInputPassword">Password</label> */}
                      <div class="input-group">
                        {/* <div class="input-group-prepend bg-transparent">
                      <span class="input-group-text bg-transparent border-right-0">
                        <i class="ti-lock text-primary"></i>
                      </span>
                    </div> */}
                        <input
                          type="phone"
                          className="form-control  border-left-0 input-login"
                          id="exampleInputfPassword"
                          placeholder="pin code"
                        />
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">

                 
                    <div class="my-2 d-flex  align-items-center">
                      {/* <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
    Default checkbox
  </label>
</div> */}
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        class="form-check-label ms-2"
                        for="flexCheckDefault"
                      >
                        Remember Me
                      </label>
                   
                    </div>
                    {/* <a href="#" class="auth-link text-black text-end">Forgot password?</a> */}
                    </div>
                    <div class="d-grid mt-3 gap-2 col-12 mx-auto mb-2">
                      <button class="btn btn-primary" type="button">
                        Signin
                      </button>
                      {/* <button class="btn btn-primary" type="button">Button</button> */}
                    </div>
                    <p>
                      Not a member yet? Click{" "}
                      <a href="#" class="auth-link text-black">
                        here
                      </a>{" "}
                      to register.
                    </p>
                    {/* <div class="my-3">
                  <a class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" href="../../index.html">LOGIN</a>
                </div> */}
                    {/* <div class="mb-2 d-flex">
                  <button type="button" class="btn btn-facebook auth-form-btn flex-grow me-1">
                    <i class="ti-facebook me-2"></i>Facebook
                  </button>
                  <button type="button" class="btn btn-google auth-form-btn flex-grow ms-1">
                    <i class="ti-google me-2"></i>Google
                  </button>
                </div>
                <div class="text-center mt-4 fw-light">
                  Don't have an account? <a href="register-2.html" class="text-primary">Create</a>
                </div> */}
                  </form>
                  <hr className="mt-5" />

                  {/* <p className="text-center">
                    © Color Admin All Right Reserved 2021
                  </p> */}
                </div>
              </div>
              {/* </DraggableList> */}
            </div>
          </div>
          {/* <!-- content-wrapper ends --> */}
        </div>
        {/* <!-- page-body-wrapper ends --> */}
      </div>
      {/* <!-- container-scroller --> */}
      {/* <!-- plugins:js --> */}
    </>
  );
};
export default Login;
