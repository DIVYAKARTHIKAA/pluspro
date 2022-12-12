import React from 'react';
import './index.css';
import LocalHospitalSharpIcon from '@mui/icons-material/LocalHospitalSharp';
import RegisterForm from './formedc';
const App=()=>{
    return(
            <div className="back">
              <div className="car1">
                <h1 id="head1">Bodhi Plus</h1>
                <div className="ic1">
                    <LocalHospitalSharpIcon />
                    </div>
                </div>
                <div className="car2"></div>
                <div className="car3">
                    <h4 id="he1">PATIENT MEDICAL RECORD</h4>
                </div> 
                    <RegisterForm />
                    <div  className="divi2">
          <div className="c1">Update Currently taking medicines</div>
          <hr class="hr1"></hr>
          <input id="chi1" type="text1" name="text1" placeholder="Enter your text" />
          <input id="chi2" type="text1" name="text1" placeholder="Enter your text" />
          <input id="chi3" type="text1" name="text1" placeholder="Enter your text" />
          </div>
          <div  className="divi3">
          <div className="c2">Update Medical History</div>
          <hr class="hr2"></hr>
          <input id="chi1" type="text1" name="text1" placeholder="Enter your text" />
          <input id="chi2" type="text1" name="text1" placeholder="Enter your text" />
          <input id="chi3" type="text1" name="text1" placeholder="Enter your text" />
          </div>
          <div  className="divi4">
          <div className="c3">Update Surgeries</div>
          <hr class="hr3"></hr>
          <input id="chi1" type="text1" name="text1" placeholder="Enter your text" />
          <input id="chi2" type="text1" name="text1" placeholder="Enter your text" />
          <input id="chi3" type="text1" name="text1" placeholder="Enter your text" />
          

          </div>
          <button className="button1">Print record</button>
          </div>
    )
}

export default App;