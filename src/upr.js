import React from "react";
import './index.css';
import LocalHospitalSharpIcon from '@mui/icons-material/LocalHospitalSharp';
import UpgradeSharpIcon from '@mui/icons-material/UpgradeSharp';
const App=()=>{
    return(
        <div className="bac">
            <div className="card1">
                <h1 id="t1">Bodhi Plus</h1>
                <div className="i1"><LocalHospitalSharpIcon /></div>
                </div>
                <div className="card2"></div>
                <div className="card3">
                    <h4 id="h1">PATIENT MEDICAL RECORD</h4>
                </div>
                <div className="bl1">Update Medical Record
                <div className="i2"><UpgradeSharpIcon/></div>
                </div>
                <div  className="div2">
          <div className="c1">Update Currently 
taking medicines</div>
          <hr class="hr1"></hr>
          <input id="chi1" type="text1" name="text1" placeholder="Enter your text" />
          <input id="chi2" type="text1" name="text1" placeholder="Enter your text" />
          <input id="chi3" type="text1" name="text1" placeholder="Enter your text" />
          </div>
          <div  className="div3">
          <div className="c2">Update Medical History</div>
          <hr class="hr2"></hr>
          <input id="chi1" type="text1" name="text1" placeholder="Enter your text" />
          <input id="chi2" type="text1" name="text1" placeholder="Enter your text" />
          <input id="chi3" type="text1" name="text1" placeholder="Enter your text" />
          </div>
          <div  className="div4">
          <div className="c3">Update Surgeries</div>
          <hr class="hr3"></hr>
          <input id="chi1" type="text1" name="text1" placeholder="Enter your text" />
          <input id="chi2" type="text1" name="text1" placeholder="Enter your text" />
          <input id="chi3" type="text1" name="text1" placeholder="Enter your text" />
          <button class="button">Submit</button>
          </div>
                </div>
    )
}

export default App;