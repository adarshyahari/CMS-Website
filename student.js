class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `


   <!-- NAVBAR -->
      <nav class="navbar fixed-top navbar-expand-lg navbar-dark navbar-custom py-2 justify-content-between">
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
            	<form class="form-inline d-none d-lg-inline " >
				  <input class="form-control search-bar" type="search" placeholder="Search course" aria-label="Search">
			  </form>

		<div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
			<ul class="nav navbar-nav">
	            <li class="nav-item"><a class="nav-link text-light" href="book-trial.html">Book a free trial</a></li>
	            <li class="nav-item"><a class="nav-link text-light"  data-toggle="pill" href="#v-pills-courses" role="tab">Dashboard</a></li>
	            <li class="nav-item"><a class="nav-link text-light" href="#">Logout</a></li>
            </ul>
       </div>
</nav>

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
			       <form class="pt-sm-5">
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
            <li><span class="text-white">Contact Number : 9999999999</span></li>
            <li><span class="text-white">Email ID : abc@gmail.com</span></li>
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
