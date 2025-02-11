
class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `


   <!-- NAVBAR -->
      <nav class="navbar sticky-top navbar-expand-lg navbar-dark navbar-custom py-2 justify-content-between">
	<i class="fas fa-search d-sm-none"></i>
	<a class="navbar-brand" href="index.html">
		CMS Online Academy
	</a>
   	<form class="form-inline d-none d-sm-inline d-lg-none">
				  <input class="form-control search-bar" type="search" placeholder="Search" aria-label="Search">
				  <button class="btn" type="submit"><i class="fas fa-search"></i></button>
	</form>

	<span class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		<i class="fas fa-chevron-circle-down"></i>
	</span>
		    

    <div class="collapse navbar-collapse" id="navbarSupportedContent">

      <ul class="nav navbar-nav">
	        <li class="nav-item dropdown">
	        	<a class="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Company</a>
				<div class="dropdown-menu" aria-labelledby="navbarDropdown">
				  <a class="dropdown-item " href="about-us.html">About us</a>
				  <a class="dropdown-item" href="faq.html">FAQ</a>
				  <a class="dropdown-item" data-toggle="modal" data-target="#query-popup">Ask a query</a>
			  </div>
			</li>
			<li class="nav-item dropdown">
				<a class="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				  Courses
				  </a>
				  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
					  <a class="dropdown-item" href="courses-offered.html">Technology</a>
					  <a class="dropdown-item" href="courses-offered.html">Creative</a>
					  <a class="dropdown-item" href="courses-offered.html">Education</a>
					  <a class="dropdown-item" href="courses-offered.html">Games & Development</a>
					  <a class="dropdown-item" href="courses-offered.html">Language & Culture</a>
					  <a class="dropdown-item" href="courses-offered.html">Music & Dance</a>
					  <a class="dropdown-item" href="courses-offered.html">Lifestyle</a>
					  <a class="dropdown-item" href="courses-offered.html">Professional Development</a>
				  </div>
			</li>
            <li class="nav-item"><a class="nav-link text-light" href="teach-with-us.html">Teach with us</a></li>
        </ul>
       </div>
            	<form class="form-inline d-none d-lg-inline ">
				  <input class="form-control search-bar" type="search" placeholder="Search course" aria-label="Search">
			  </form>

		<div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
			<ul class="nav navbar-nav">
        	<li class="nav-item" ><a class="nav-link text-light " data-toggle="modal" data-target="#register-popup" >Register</a></li>
            <li class="nav-item"><a class="nav-link text-light" href="book-trial.html">Book a free trial</a></li>
            </ul>
       </div>
</nav>

<!-- REGISTER -->

<div class="modal fade" id="register-popup" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-xl modal-reg" >
    <div class="card modal-content ">  	
      	<div class="row no-gutters">
		    <div class="col-lg-4 reg-con">
		      <div class="card-body  text-center text-white text-medium">
		      	<div class="close-btn close d-inline d-lg-none"data-dismiss="modal" aria-label="Close">&times;</div>
			       <div class="pt-lg-5 mt-lg-5 py-3 px-3">
				       <h1>Register</h1>
				       <br>
				      <p>New User?</p>
				      <p>Create an account here!</p>
				      <p>By registering with us, you can book regular classes for your kid.</p> 
					  <p >We will even make personalized recommendations on what to do next after your child has completed a course</p>
				  </div>
		      </div>
		    </div>
		    <div class="col-lg-8 reg-form px-2">
		      <div class="card-body">
		      	<div class="close-btn close d-none d-lg-inline" data-dismiss="modal" aria-label="Close">&times;</div>
			       <form class="pt-lg-4">
					  <div class="form-row">
					    <div class="col-6">
					    	<label for="pfname">Parent's First Name</label>
					      <input type="text" id="pfname" class="form-control form-control-sm " placeholder="ex) John" required>
					    </div>
					    <div class="col-6">
					    	<label for="plname">Parent's Last Name</label>
					      <input type="text" id="plname" class="form-control form-control-sm" placeholder="ex) Doe" required>
					    </div>
					  </div>

					  <div class="form-row">
					    <div class="col-6">
					    	<label for="sfname">Student's First Name</label>
					      <input type="text" id="sfname" class="form-control form-control-sm" placeholder="ex John" required>
					    </div>
					    <div class="col-6">
					    	<label for="slname">Student's Last Name</label>
					      <input type="text" id="slname" class="form-control form-control-sm" placeholder="ex Doe" required>
					    </div>
					  </div>

					  <div class="form-row">
					    <div class="col-6">
					    	<label for="email">Email</label>
			      			<input type="email" class="form-control form-control-sm" id="email" placeholder="example@email.com" required>
					    </div>
					    <div class="col-6">
					    	<label for="grade">Grade</label>
					    	<select id="grade" class="form-control form-control-sm">
			        			<option selected>Grade 1</option>
			        			<option>Grade 2</option>
			        			<option>Grade 3</option>
			        			<option>Grade 4</option>
			        			<option>Grade 5</option>
			        			<option>Grade 6</option>
			        			<option>Grade 7</option>
			        			<option>Grade 8</option>
			        			<option>Grade 9</option>
			        			<option>Grade 10</option>
			        			<option>Grade 11</option>
			        			<option>Grade 12</option>
			        			<option>College Student</option>
			      			</select>
					    </div>
					  </div>

					  
					  	
					  	<div class="form-row">
					    <div class="col-4">
					    	<label for="cc">Country Code</label>
					  		<select name="countryCode" id="cc" class="form-control form-control-sm">
								<option data-countryCode="GB" value="44" >UK (+44)</option>
								<option data-countryCode="US" value="1" selected>USA (+1)</option>
								<optgroup label="Other countries">
									<option data-countryCode="DZ" value="213">Algeria (+213)</option>
									<option data-countryCode="AD" value="376">Andorra (+376)</option>
								<option data-countryCode="AO" value="244">Angola (+244)</option>
								<option data-countryCode="AI" value="1264">Anguilla (+1264)</option>
								<option data-countryCode="AG" value="1268">Antigua &amp; Barbuda (+1268)</option>
								<option data-countryCode="AR" value="54">Argentina (+54)</option>
								<option data-countryCode="AM" value="374">Armenia (+374)</option>
								<option data-countryCode="AW" value="297">Aruba (+297)</option>
								<option data-countryCode="AU" value="61">Australia (+61)</option>
								<option data-countryCode="AT" value="43">Austria (+43)</option>
								<option data-countryCode="AZ" value="994">Azerbaijan (+994)</option>
								<option data-countryCode="BS" value="1242">Bahamas (+1242)</option>
								<option data-countryCode="BH" value="973">Bahrain (+973)</option>
								<option data-countryCode="BD" value="880">Bangladesh (+880)</option>
								<option data-countryCode="BB" value="1246">Barbados (+1246)</option>
								<option data-countryCode="BY" value="375">Belarus (+375)</option>
								<option data-countryCode="BE" value="32">Belgium (+32)</option>
								<option data-countryCode="BZ" value="501">Belize (+501)</option>
								<option data-countryCode="BJ" value="229">Benin (+229)</option>
								<option data-countryCode="BM" value="1441">Bermuda (+1441)</option>
								<option data-countryCode="BT" value="975">Bhutan (+975)</option>
								<option data-countryCode="BO" value="591">Bolivia (+591)</option>
								<option data-countryCode="BA" value="387">Bosnia Herzegovina (+387)</option>
								<option data-countryCode="BW" value="267">Botswana (+267)</option>
								<option data-countryCode="BR" value="55">Brazil (+55)</option>
								<option data-countryCode="BN" value="673">Brunei (+673)</option>
								<option data-countryCode="BG" value="359">Bulgaria (+359)</option>
								<option data-countryCode="BF" value="226">Burkina Faso (+226)</option>
								<option data-countryCode="BI" value="257">Burundi (+257)</option>
								<option data-countryCode="KH" value="855">Cambodia (+855)</option>
								<option data-countryCode="CM" value="237">Cameroon (+237)</option>
								<option data-countryCode="CA" value="1">Canada (+1)</option>
								<option data-countryCode="CV" value="238">Cape Verde Islands (+238)</option>
								<option data-countryCode="KY" value="1345">Cayman Islands (+1345)</option>
								<option data-countryCode="CF" value="236">Central African Republic (+236)</option>
								<option data-countryCode="CL" value="56">Chile (+56)</option>
								<option data-countryCode="CN" value="86">China (+86)</option>
								<option data-countryCode="CO" value="57">Colombia (+57)</option>
								<option data-countryCode="KM" value="269">Comoros (+269)</option>
								<option data-countryCode="CG" value="242">Congo (+242)</option>
								<option data-countryCode="CK" value="682">Cook Islands (+682)</option>
								<option data-countryCode="CR" value="506">Costa Rica (+506)</option>
								<option data-countryCode="HR" value="385">Croatia (+385)</option>
								<option data-countryCode="CU" value="53">Cuba (+53)</option>
								<option data-countryCode="CY" value="90392">Cyprus North (+90392)</option>
								<option data-countryCode="CY" value="357">Cyprus South (+357)</option>
								<option data-countryCode="CZ" value="42">Czech Republic (+42)</option>
								<option data-countryCode="DK" value="45">Denmark (+45)</option>
								<option data-countryCode="DJ" value="253">Djibouti (+253)</option>
								<option data-countryCode="DM" value="1809">Dominica (+1809)</option>
								<option data-countryCode="DO" value="1809">Dominican Republic (+1809)</option>
								<option data-countryCode="EC" value="593">Ecuador (+593)</option>
								<option data-countryCode="EG" value="20">Egypt (+20)</option>
								<option data-countryCode="SV" value="503">El Salvador (+503)</option>
								<option data-countryCode="GQ" value="240">Equatorial Guinea (+240)</option>
								<option data-countryCode="ER" value="291">Eritrea (+291)</option>
								<option data-countryCode="EE" value="372">Estonia (+372)</option>
								<option data-countryCode="ET" value="251">Ethiopia (+251)</option>
								<option data-countryCode="FK" value="500">Falkland Islands (+500)</option>
								<option data-countryCode="FO" value="298">Faroe Islands (+298)</option>
								<option data-countryCode="FJ" value="679">Fiji (+679)</option>
								<option data-countryCode="FI" value="358">Finland (+358)</option>
								<option data-countryCode="FR" value="33">France (+33)</option>
								<option data-countryCode="GF" value="594">French Guiana (+594)</option>
								<option data-countryCode="PF" value="689">French Polynesia (+689)</option>
								<option data-countryCode="GA" value="241">Gabon (+241)</option>
								<option data-countryCode="GM" value="220">Gambia (+220)</option>
								<option data-countryCode="GE" value="7880">Georgia (+7880)</option>
								<option data-countryCode="DE" value="49">Germany (+49)</option>
								<option data-countryCode="GH" value="233">Ghana (+233)</option>
								<option data-countryCode="GI" value="350">Gibraltar (+350)</option>
								<option data-countryCode="GR" value="30">Greece (+30)</option>
								<option data-countryCode="GL" value="299">Greenland (+299)</option>
								<option data-countryCode="GD" value="1473">Grenada (+1473)</option>
								<option data-countryCode="GP" value="590">Guadeloupe (+590)</option>
								<option data-countryCode="GU" value="671">Guam (+671)</option>
								<option data-countryCode="GT" value="502">Guatemala (+502)</option>
								<option data-countryCode="GN" value="224">Guinea (+224)</option>
								<option data-countryCode="GW" value="245">Guinea - Bissau (+245)</option>
								<option data-countryCode="GY" value="592">Guyana (+592)</option>
								<option data-countryCode="HT" value="509">Haiti (+509)</option>
								<option data-countryCode="HN" value="504">Honduras (+504)</option>
								<option data-countryCode="HK" value="852">Hong Kong (+852)</option>
								<option data-countryCode="HU" value="36">Hungary (+36)</option>
								<option data-countryCode="IS" value="354">Iceland (+354)</option>
								<option data-countryCode="IN" value="91">India (+91)</option>
								<option data-countryCode="ID" value="62">Indonesia (+62)</option>
								<option data-countryCode="IR" value="98">Iran (+98)</option>
								<option data-countryCode="IQ" value="964">Iraq (+964)</option>
								<option data-countryCode="IE" value="353">Ireland (+353)</option>
								<option data-countryCode="IL" value="972">Israel (+972)</option>
								<option data-countryCode="IT" value="39">Italy (+39)</option>
								<option data-countryCode="JM" value="1876">Jamaica (+1876)</option>
								<option data-countryCode="JP" value="81">Japan (+81)</option>
								<option data-countryCode="JO" value="962">Jordan (+962)</option>
								<option data-countryCode="KZ" value="7">Kazakhstan (+7)</option>
								<option data-countryCode="KE" value="254">Kenya (+254)</option>
								<option data-countryCode="KI" value="686">Kiribati (+686)</option>
								<option data-countryCode="KP" value="850">Korea North (+850)</option>
								<option data-countryCode="KR" value="82">Korea South (+82)</option>
								<option data-countryCode="KW" value="965">Kuwait (+965)</option>
								<option data-countryCode="KG" value="996">Kyrgyzstan (+996)</option>
								<option data-countryCode="LA" value="856">Laos (+856)</option>
								<option data-countryCode="LV" value="371">Latvia (+371)</option>
								<option data-countryCode="LB" value="961">Lebanon (+961)</option>
								<option data-countryCode="LS" value="266">Lesotho (+266)</option>
								<option data-countryCode="LR" value="231">Liberia (+231)</option>
								<option data-countryCode="LY" value="218">Libya (+218)</option>
								<option data-countryCode="LI" value="417">Liechtenstein (+417)</option>
								<option data-countryCode="LT" value="370">Lithuania (+370)</option>
								<option data-countryCode="LU" value="352">Luxembourg (+352)</option>
								<option data-countryCode="MO" value="853">Macao (+853)</option>
								<option data-countryCode="MK" value="389">Macedonia (+389)</option>
								<option data-countryCode="MG" value="261">Madagascar (+261)</option>
								<option data-countryCode="MW" value="265">Malawi (+265)</option>
								<option data-countryCode="MY" value="60">Malaysia (+60)</option>
								<option data-countryCode="MV" value="960">Maldives (+960)</option>
								<option data-countryCode="ML" value="223">Mali (+223)</option>
								<option data-countryCode="MT" value="356">Malta (+356)</option>
								<option data-countryCode="MH" value="692">Marshall Islands (+692)</option>
								<option data-countryCode="MQ" value="596">Martinique (+596)</option>
								<option data-countryCode="MR" value="222">Mauritania (+222)</option>
								<option data-countryCode="YT" value="269">Mayotte (+269)</option>
								<option data-countryCode="MX" value="52">Mexico (+52)</option>
								<option data-countryCode="FM" value="691">Micronesia (+691)</option>
								<option data-countryCode="MD" value="373">Moldova (+373)</option>
								<option data-countryCode="MC" value="377">Monaco (+377)</option>
								<option data-countryCode="MN" value="976">Mongolia (+976)</option>
								<option data-countryCode="MS" value="1664">Montserrat (+1664)</option>
								<option data-countryCode="MA" value="212">Morocco (+212)</option>
								<option data-countryCode="MZ" value="258">Mozambique (+258)</option>
								<option data-countryCode="MN" value="95">Myanmar (+95)</option>
								<option data-countryCode="NA" value="264">Namibia (+264)</option>
								<option data-countryCode="NR" value="674">Nauru (+674)</option>
								<option data-countryCode="NP" value="977">Nepal (+977)</option>
								<option data-countryCode="NL" value="31">Netherlands (+31)</option>
								<option data-countryCode="NC" value="687">New Caledonia (+687)</option>
								<option data-countryCode="NZ" value="64">New Zealand (+64)</option>
								<option data-countryCode="NI" value="505">Nicaragua (+505)</option>
								<option data-countryCode="NE" value="227">Niger (+227)</option>
								<option data-countryCode="NG" value="234">Nigeria (+234)</option>
								<option data-countryCode="NU" value="683">Niue (+683)</option>
								<option data-countryCode="NF" value="672">Norfolk Islands (+672)</option>
								<option data-countryCode="NP" value="670">Northern Marianas (+670)</option>
								<option data-countryCode="NO" value="47">Norway (+47)</option>
								<option data-countryCode="OM" value="968">Oman (+968)</option>
								<option data-countryCode="PW" value="680">Palau (+680)</option>
								<option data-countryCode="PA" value="507">Panama (+507)</option>
								<option data-countryCode="PG" value="675">Papua New Guinea (+675)</option>
								<option data-countryCode="PY" value="595">Paraguay (+595)</option>
								<option data-countryCode="PE" value="51">Peru (+51)</option>
								<option data-countryCode="PH" value="63">Philippines (+63)</option>
								<option data-countryCode="PL" value="48">Poland (+48)</option>
								<option data-countryCode="PT" value="351">Portugal (+351)</option>
								<option data-countryCode="PR" value="1787">Puerto Rico (+1787)</option>
								<option data-countryCode="QA" value="974">Qatar (+974)</option>
								<option data-countryCode="RE" value="262">Reunion (+262)</option>
								<option data-countryCode="RO" value="40">Romania (+40)</option>
								<option data-countryCode="RU" value="7">Russia (+7)</option>
								<option data-countryCode="RW" value="250">Rwanda (+250)</option>
								<option data-countryCode="SM" value="378">San Marino (+378)</option>
								<option data-countryCode="ST" value="239">Sao Tome &amp; Principe (+239)</option>
								<option data-countryCode="SA" value="966">Saudi Arabia (+966)</option>
								<option data-countryCode="SN" value="221">Senegal (+221)</option>
								<option data-countryCode="CS" value="381">Serbia (+381)</option>
								<option data-countryCode="SC" value="248">Seychelles (+248)</option>
								<option data-countryCode="SL" value="232">Sierra Leone (+232)</option>
								<option data-countryCode="SG" value="65">Singapore (+65)</option>
								<option data-countryCode="SK" value="421">Slovak Republic (+421)</option>
								<option data-countryCode="SI" value="386">Slovenia (+386)</option>
								<option data-countryCode="SB" value="677">Solomon Islands (+677)</option>
								<option data-countryCode="SO" value="252">Somalia (+252)</option>
								<option data-countryCode="ZA" value="27">South Africa (+27)</option>
								<option data-countryCode="ES" value="34">Spain (+34)</option>
								<option data-countryCode="LK" value="94">Sri Lanka (+94)</option>
								<option data-countryCode="SH" value="290">St. Helena (+290)</option>
								<option data-countryCode="KN" value="1869">St. Kitts (+1869)</option>
								<option data-countryCode="SC" value="1758">St. Lucia (+1758)</option>
								<option data-countryCode="SD" value="249">Sudan (+249)</option>
								<option data-countryCode="SR" value="597">Suriname (+597)</option>
								<option data-countryCode="SZ" value="268">Swaziland (+268)</option>
								<option data-countryCode="SE" value="46">Sweden (+46)</option>
								<option data-countryCode="CH" value="41">Switzerland (+41)</option>
								<option data-countryCode="SI" value="963">Syria (+963)</option>
								<option data-countryCode="TW" value="886">Taiwan (+886)</option>
								<option data-countryCode="TJ" value="7">Tajikstan (+7)</option>
								<option data-countryCode="TH" value="66">Thailand (+66)</option>
								<option data-countryCode="TG" value="228">Togo (+228)</option>
								<option data-countryCode="TO" value="676">Tonga (+676)</option>
								<option data-countryCode="TT" value="1868">Trinidad &amp; Tobago (+1868)</option>
								<option data-countryCode="TN" value="216">Tunisia (+216)</option>
								<option data-countryCode="TR" value="90">Turkey (+90)</option>
								<option data-countryCode="TM" value="7">Turkmenistan (+7)</option>
								<option data-countryCode="TM" value="993">Turkmenistan (+993)</option>
								<option data-countryCode="TC" value="1649">Turks &amp; Caicos Islands (+1649)</option>
								<option data-countryCode="TV" value="688">Tuvalu (+688)</option>
								<option data-countryCode="UG" value="256">Uganda (+256)</option>
								<!-- <option data-countryCode="GB" value="44">UK (+44)</option> -->
								<option data-countryCode="UA" value="380">Ukraine (+380)</option>
								<option data-countryCode="AE" value="971">United Arab Emirates (+971)</option>
								<option data-countryCode="UY" value="598">Uruguay (+598)</option>
								<!-- <option data-countryCode="US" value="1">USA (+1)</option> -->
								<option data-countryCode="UZ" value="7">Uzbekistan (+7)</option>
								<option data-countryCode="VU" value="678">Vanuatu (+678)</option>
								<option data-countryCode="VA" value="379">Vatican City (+379)</option>
								<option data-countryCode="VE" value="58">Venezuela (+58)</option>
								<option data-countryCode="VN" value="84">Vietnam (+84)</option>
								<option data-countryCode="VG" value="84">Virgin Islands - British (+1284)</option>
								<option data-countryCode="VI" value="84">Virgin Islands - US (+1340)</option>
								<option data-countryCode="WF" value="681">Wallis &amp; Futuna (+681)</option>
								<option data-countryCode="YE" value="969">Yemen (North)(+969)</option>
								<option data-countryCode="YE" value="967">Yemen (South)(+967)</option>
								<option data-countryCode="ZM" value="260">Zambia (+260)</option>
								<option data-countryCode="ZW" value="263">Zimbabwe (+263)</option>
								</optgroup>
							</select>
					  		
					  	
					    </div>
					    <div class="col-6">
					    	<label for="cn">Contact Number</label>
					      <input type="tel" id="cn" class="form-control form-control-sm" placeholder="9999999999" required>
					    </div>
					  </div>

					  <div class="form-row">
					  	<div class="col-4">
					  		<p class="text-large">Create Password</p>
					  	</div>
					  	<div class="col-8">
					  		<p class="text-tiny">Passwords should be at least 8 characters long and should contain at least one number, one uppercase, and one lowercase letter.</p>
					  	</div>
					  </div>

					  <div class="form-row">
					    <div class="col-6">
					      <input type="Password" id="Password" class="form-control form-control-sm" placeholder="Enter Password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required>
					    </div>
					    <div class="col-6">
					      <input type="Password" id="Password" class="form-control form-control-sm" placeholder="Confirm Password" required>
					    </div>
					  </div>
					 <div class="text-center"><button type="submit" class="form-btn custom-btn" >Register</button></div>
						

					
					</form>
					<p class="text-small text-right">Already have an account? 
					<button class="form-btn custom-btn"  role="button" data-toggle="modal" data-target="#login-popup" data-dismiss="modal">Login</button>
					</p>
		      </div>
		    </div>
		  </div>
    </div>
  </div>
</div>   



<!-- LOGIN -->
<div class="modal fade" id="login-popup" data-backdrop="static" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg modal-reg" >
    <div class="card modal-content ">  	
      	<div class="row no-gutters">
		    <div class="col-lg-6 reg-con">
		      <div class="card-body  text-center text-white text-medium">
		      	<div class="close-btn close d-inline d-lg-none"data-dismiss="modal" aria-label="Close">&times;</div>
			       <div class="py-3 px-2">
				       <h1>Login</h1>
				       <br>
				      <p>Good to see you again!</p>
				      <p>Login to your account to see your progress, attend classes, book courses, receive personalized recommendations, and more!</p> 
				  </div>
		      </div>
		    </div>

		    <div class="col-lg-6 reg-form">
		      <div class="card-body ">
		      	<div class="close-btn close d-none d-lg-inline"data-dismiss="modal" aria-label="Close">&times;</div>
			       <form class="px-5 pt-lg-4"">
						<input type="email" class="form-row form-control form-control-sm" id="email" placeholder="example@email.com" required>
					     <input type="Password" id="Password" class="form-row form-control form-control-sm" placeholder="Enter Password" required>
					  	<a href="#forgot-popup" data-toggle="modal" data-target="	#forgot-popup" data-dismiss="modal" class="text-small" style="font-weight: 600">Forgot Password?</a>
					 <div class="text-center"><button type="submit" class="form-btn custom-btn" >Login</button></div>
					</form>
					<p class="text-small text-right">New user? Create account
					<button class="form-btn custom-btn" role="button" data-toggle="modal" data-target="#register-popup" data-dismiss="modal">Register</button>
					</p>
		      </div>
		    </div>
		</div>
    </div>
  </div>
</div>   




<!-- FORGOT PASSWORD -->

<div class="modal fade" id="forgot-popup" data-backdrop="static" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-md modal-reg" >
    
    <div class="modal-content ">  	
		    
			  
				<div class="py-3 px-5 text-center text-medium">
					<div class="close" style="float: right;" data-dismiss="modal" aria-label="Close">&times;</div>
					<br>
					<br>
					<h3>Forgot Password?</h3>
				      <p>Enter account email address</p>
				      <p>We will send you a link to change your password</p> 
				      
				      <form class="px-5 ">
					      <input type="email" class="form-row form-control form-control-sm" id="email" placeholder="example@email.com" required>
					       <button type="submit" class="form-btn custom-btn" >Send</button>
				       </form>

				       <p class="text-small text-center">New user? Create account
						<button class="form-btn custom-btn" role="button" data-toggle="modal" data-target="#register-popup" data-dismiss="modal">Register</button>
						</p>
			  	</div>
      		</div>
   		 </div>
   	</div>
  </div>

  <!-- SEND QUERY -->
<div class="modal fade" id="query-popup" data-backdrop="static" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-md modal-reg" >
    <div class="card modal-content ">  	
      	<div class="row no-gutters">
		    <div class="col-sm-5 query-con">
		      <div class="card-body  text-center text-white text-medium">
		      	<div class="close d-inline d-sm-none" data-dismiss="modal" aria-label="Close">&times;</div>
			       <div class="py-3 px-2">
				       <h3>Send your query</h3>
				       <br>
				      <p>Have any questions?</p>
				      <p>Send us an email and we'll reply within 2-3 business days!  </p> 
				  </div>
		      </div>
		    </div>

		    <div class="col-sm-7 reg-form">
		      <div class="card-body ">
		      	<div class="close d-none d-sm-inline" data-dismiss="modal" aria-label="Close">&times;</div>
		      	<br>
			       <form class="mt-0 pt-0 pt-sm-5">
			        	<input type="text" id="pname" class="form-control form-control-sm form-row" placeholder="ex)John Doe" required>
						<input type="email" class="form-row form-control form-control-sm form-row" id="email" placeholder="example@email.com" required>
					     <textarea class="form-control form-control-sm form-row"  id="query" name="query"rows="5" cols="33" aria-label="query textarea" placeholder="Enter your query"></textarea>
				
					  	<div class="text-center"><button type="submit" class="form-btn custom-btn" >Send</button></div>
					</form>
		      </div>
		    </div>
		</div>
    </div>
  </div>
</div>  
      `;
  }
}

class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `	   
      <footer class="footer">
      <div class="container ">
        <div class="row justify-content-between">
        <div class=" col-lg-4 col-md-3 col-sm-7 my-auto pt-5">
          <h3><a href="index.html" class="h3">CMS Online Academy</a></h3>
          <p>
				<span class="sub">Get inspired. </span>
				<span class="sub">Get creative. </span>
				<span class="sub">Get productive.</span>
		</p>
          <a class="text-white " href="book-trial.html">Book a free trial</a>
          <ul class="list-unstyled list-inline py-2">
          	<li class="list-inline-item"><a href="#" ><i class="fab fa-facebook-square fa-lg"></i></a></li>
          	<li class="list-inline-item"><a href="#"><i class="fab fa-instagram fa-lg"></i></a></li>
          	<li class="list-inline-item"><a href="#"><i class="fab fa-linkedin fa-lg"></i></a></li>
          </ul>
        </div>
        <div class=" col-lg-3 col-md-4  col-sm-5"><br>
          <h5>Categories</h5>
          <ul class="list-unstyled text-small ">
            <li><a class="text-white " href="courses-offered.html">Technology</a></li>
            <li><a class="text-white" href="courses-offered.html">Creative</a></li>
            <li><a class="text-white" href="courses-offered.html">Education</a></li>
            <li><a class="text-white" href="courses-offered.html">Games & Development</a></li>
            <li><a class="text-white" href="courses-offered.html">Language & Culture</a></li>
            <li><a class="text-white" href="courses-offered.html">Music & Dance</a></li>
            <li><a class="text-white" href="courses-offered.html">Lifestyle</a></li>
            <li><a class="text-white" href="courses-offered.html">Professional Development</a></li>
          </ul>
        </div>
        <div class=" col-lg-2 col-md-2 col-sm-6"><br>
          <h5>Company</h5>
          <ul class="list-unstyled text-small">
            <li><a class="text-white" href="about-us.html">About us</a></li>
            <li><a class="text-white" href="teach-with-us.html">Teach with us</a></li>
            <li><a class="text-white" href="faq.html">FAQ</a></li>
          </ul>
        </div>
        <div class=" col-lg-3 col-md-3 col-sm-6"><br>
          <h5>Get in touch with us</h5>
          <ul class="list-unstyled text-small">
            <li><a href="tel:+91 9443232761" class="text-white">Contact Number : 9999999999</a></li>
            <li><a href="mailto:adarshyahari@gmail.com" class="text-white">Email ID : abc@gmail.com</span></li>
            <li><a class="text-white"  data-toggle="modal" data-target="#query-popup">Ask a query</a></li>
          </ul>
        </div>
        
      </div>
  </div>
      
    </footer>    
    `;
  }
}

customElements.define('main-header', Header);
customElements.define('main-footer', Footer);

function EnableDisable(grade) {
		        var selectedValue = grade.options[grade.selectedIndex].value;
		        var category = document.getElementById("category");
		        category.disabled = selectedValue == 2?false:true;
		        if (!category.disabled) {
		            category.focus();
		        }
		    }
function EnableDisable1(category) {
		        var selectedValue = category.options[category.selectedIndex].value;
		        var course = document.getElementById("course");
		        course.disabled = selectedValue == "creative"?false:true;
		        if (!course.disabled) {
		            course.focus();
		        }
		    }
		    
function EnableDisableBtop() {
	var selectedValue = timing.options[timing.selectedIndex].value;
	var x = document.getElementById("btop");
	x.disabled = selectedValue == "eve"?false:true;
	  if (!x.disabled) {
	    x.style.display = "block";
	    x.focus();
	  } else {
	    x.style.display = "none";
	  }
}
