import React,{useState} from 'react'
import { FiCheck } from "react-icons/fi";
import { AiFillCheckCircle } from "react-icons/ai";
const Thankyoupage = () => {
    const [radio, setRadio] = useState("Limited");
    const [show, setShow] = useState(false);
    const [text,setText] = useState(true)
    const handleRadio = (value) => {
      console.log(value, "value");
      setRadio(value);
    };
  return (
    <div class="container-fluid setting-form">
    <div className="form-setting-div">
      {" "}
      <div>
        <div className="form-setting-icon1">
          <AiFillCheckCircle style={{ width: "25px", height: "auto" }} />
        </div>
      </div>
   
      <div className="form-setting-right-div">
        <h2 className="form-setting-h1">THANK YOU PAGE</h2>
        <p className="form-setting-p">Choose an Action After Submission:</p>
      </div>
    </div>
    <div className='d-flex justify-content-between'><div className='col-md-5'><div className='thankyou-radio'>
      <input
                    id="individual"
                    checked={radio === "Limited"}
                    type="radio"
                    name="business"
                    value="Limited"
                    onClick={() => {
                      handleRadio("Limited");
                    }}
                  />
                  <label for="individual">
                    <span></span>Limited Company
                  </label>

                 </div></div><div className='col-md-5'><div className='thankyou-radio'>
                 <input
                    id="organization"
                    type="radio"
                    checked={radio === "Sole"}
                    name="business"
                    value="Sole"
                    onClick={() => {
                      handleRadio("Sole");
                    }}
                  />
                  <label for="organization" className="second-lable">
                    <span></span>Sole Trader
                  </label></div></div></div>
                  <hr />
   
  
  </div>
  )
}
export default Thankyoupage;