import '../App.css';
import RTClogo from "../assets/img/RTClogo.png";
import './CertificatePdf.css';
import HeaderImg from "../assets/img/header-img.png";

function CertificatePdf() {
  return (
    <>
   <div className="body">
   <div class="area" >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <div className="container">
        
        <div className="container-child mt-5 align-self-center">
        <img src={RTClogo} alt="logo" className="RTClogo img-fluid" />
          <div className="row">
            
            <div className="col-md-6">  
            <h3 className="mx-1">RTC</h3>
            <p className="mx-1 greeting-message"> Hello there! You have leveled up your skills with our course, and now it's time to get the certificate. 
Please enter your email address below to download your certificate</p>
         
                <div className="d-flex align-items-center">        
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  className="form-control input-lg  mx-auto mt-3 Email-input"
                  style={{"fontSize":"16px"}}
                />
                </div>
    
              
            </div>

            <div className="col-md-6 d-flex align-items-center" id="gopdf">
        
              <img src={HeaderImg} alt="header" className="img-fluid header-img" />
              </div>
    
            
          </div>
              
        </div>
        </div>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >
    </div>
    </>
  );
}

export default CertificatePdf