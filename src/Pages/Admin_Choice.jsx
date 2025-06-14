import React from 'react'

function Admin_Choice() {
  return (
    <div>
      <div className="admin-heading">
        <h1>WELCOME BACK!!!!</h1>
        
      </div>
      <div className="admin-choice">
        <div className="card1">
          <h1>Upload Pets</h1>
          <a href="/petupload">UPLOAD</a>
        </div>
        <div className="card2">
          <h1>Upload Store Products</h1>
          <a href="/addproducts">UPLOAD</a>
        </div>
      </div>
      <div className="admin-choice2">
        <div className="card3">
          <h1>Donor Details</h1>
          <a href="/donordetails">VIEW</a>
        </div>
        
        <div className="card5">
          <h1>Shelter Details</h1>
          <a href="/shelterdetails">VIEW</a>
        </div>
      </div>
    </div>
  );
}

export default Admin_Choice
