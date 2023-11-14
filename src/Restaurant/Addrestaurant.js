import React from 'react';
import './App.css'; 
const Addrestaurant = () => {
const imgUrl = 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/4d6e5079293027.5cc2e4a88d7c8.jpg';
return (
<div className="container-fluid">
   <div className="background-image" style={{backgroundImage: `url(${imgUrl}) `}}>
   <nav className="df navbar navbar-expand-lg navbar-light">
      <div className="navbar-brand text-light">Advertise</div>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
               <button type="button" className="font-weight-bold pl-4 pr-4 pt-1 pb-1 log nav-link " data-toggle="modal" data-target="#zoomOutIn">Login <span className="sr-only">(current)</span></button>
            </li>
            <li className="nav-item">
               <a className="ca bg-primary pl-4 pr-4 pb-1 pt-1 nav-link text-light" style={{ marginLeft: '20px', }}>Create Account</a>
            </li>
         </ul>
      </div>
   </nav>
   <div className='container-fluid but'>
      <button className=' bg-primary pl-5 pr-5 pt-3 pb-3 br-3 reg'>Register your Restaurant</button>
      <button className="pl-5 pr-5 pt-3 pb-3 logv">Login to view your existing restaurants</button>
   </div>
</div>
<img
   src='https://b.zmtcdn.com/web/merchant/advertize/96ee7b3e8bda71f087622e179e9485741564646925.png'
   className="above-image"
   alt="First Image"
   />
<div className="modal fade" id="zoomOutIn" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
   <div className="modal-dialog" role="document">
      <div className="modal-content">
         <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
            <h4 className="modal-title" id="myModalLabel">Login</h4>
         </div>
         <div className="modal-body">
            <form>
               <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input type="text" className="form-control" id="username" />
               </div>
               <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" className="form-control" id="password" />
               </div>
               <button type="submit" className="btn btn-primary">Login</button>
            </form>
         </div>
         <div className="modal-footer">
            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
         </div>
      </div>
   </div>
</div>
<div className="  container-fluid  jumbotron  ">
   <div className="row align-items-center">
      <div className="mx-auto">
         <div className="gg card cb shadow border rounded-lg" style={{ width: '50rem', height: '20rem' }}>
         <div className='row'>
            <div className="card-body ">
               <div className='align-items-center'>
                  <h2 className='t1'>Get started with online ordering</h2>
                  <p className='fs pl-5 ml-5'>Please keep the documents ready for a smooth signup</p>
               </div>
               <div className='row'>
                  <div className='col-sm-6  '>
                     <ul className='list-unstyled list1 ml-3 kkk'>
                        <li><i className="fa-solid fa-circle-check"></i> FSSAI license copy</li>
                        <li><i className="fa-solid fa-circle-check"></i> PAN card copy</li>
                        <li><i className="fa-solid fa-circle-check"></i> Regular GSTIN (if applicable)</li>
                     </ul>
                  </div>
                  <div className='col-sm-6 mr-0 lh'>
                     <ul className='list-unstyled'>
                        <li><i className="fa-solid fa-circle-check"></i> Bank account details</li>
                        <li><i className="fa-solid fa-circle-check"></i> Your restaurant menu</li>
                        <li><i className="fa-solid fa-circle-check"></i> Dish images for top 5 items</li>
                     </ul>
                  </div>
               </div></div>
            </div></div> </div>
        
     
</div>
</div>
<div  className='container-fluid'>
   < div className="  ">
   <h1 className='row justify-content-center'>Why should you partner with Zomato?</h1>
   
   <p className=' row justify-content-center txt'>Zomato enables you to get 60% more revenue, 10x new customers and boost your brand <br></br><div className='t'>visibility by providing insights to improve your business.</div></p>
</div></div>
<h1>Frequently asked questions</h1>
<div className="container">
      <div id="accordion">
        <div className="card">
          <div className="card-header" id="headingOne">
            <h5 className="mb-0">
              <button className=""  data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                What will Zomato charge me for creating a page on its platform?
              </button>
            </h5>
          </div>
          <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
            <div className="card-body">
              Creating a restaurant page on Zomato is free of cost. You can maintain your page by replying to reviews and do a lot more without any charges.
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingTwo">
            <h5 className="mb-0">
              <button className="btn btn-link bn collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Collapsible Group Item #2
              </button>vron
            </h5>
          </div>
          <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
            <div className="card-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingThree">
            <h5 className="mb-0">
              <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Collapsible Group Item #3
              </button>
            </h5>
          </div>
          <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
            <div className="card-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </div>
          </div>
        </div>
      </div>
    </div>


   </div> 
);
}
export default Addrestaurant;