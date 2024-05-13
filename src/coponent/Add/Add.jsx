import generateUniqueId from 'generate-unique-id';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getData } from '../Services/Helper'


function Add() {
  const [inputText, setInputText] = useState({
    id: '',
    fname: '',
    lname: '',
    email: '',
    address: '',
    gender:'',
    age:''
});


let viewData = getData();

const navigate = useNavigate();

const handleInput = (e) => {

    let name = e.target.name;
    let value = e.target.value;

    setInputText({ ...inputText, [name]: value });
}

const handleSubmit = (e) => {

    e.preventDefault();


    let obj = {
        ...inputText
    }

    obj.id = generateUniqueId({ length: 4 });

    console.log("OBJ", obj);
    

    viewData = [...viewData, obj];


    setInputText({
      id: '',
      fname: '',
      lname: '',
      email: '',
      address: '',
      gender:'',
      age:''
    })

    console.log("viewData", viewData);
    localStorage.setItem('myData', JSON.stringify(viewData));
    navigate('/viewData');
}



  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h2 className="bg-orange">
              Pandya Royal Residences
            </h2>
          </div>

          <div className="col-12 d-flex flex-wrap justify-content-between">
            <div className='col-12 image d-flex justify-content-around'>
              <img src="image/img.avif" />
              <img src="image/photo.avif" />
              <img src="image/spa.jpg" />
            </div>
            <div className="d-flex justify-content-center col-3">
              <button className="btn btn-primary  student m-3 px-3" id="add-btn" data-bs-toggle="modal"
                  data-bs-target="#exampleModal" type="button"> <i
                    className="fa-solid fa-plus mx-2"></i>Student</button>
              <button className="btn text-white btn-danger reset m-3 px-3" type="button"><i
                  className="fa-solid fa-eraser mx-2"></i>Reset</button>
            </div>
            <div className="d-flex col-5 p-3">
              <form className="d-flex col-12" role="search">
                <input className="form-control me-2" id="serch1" type="search" placeholder="Search"
                    aria-label="Search" />
                <button className="btn serch text-white btn-info" type="submit">Search</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="d-flex flex-wrap">
                <form className="d-flex flex-wrap justify-content-center m-5" onSubmit={handleSubmit}>
                  <div className="col-4">
                    <div className="img d-flex">
                      <img src="image/add-user.png" className="justify-content-start d-flex"
                        alt="img" />
                      <i className="fa-solid fa-plus"></i>
                      <input type="file" />
                    </div>
                  </div>
                  <div className="col-8">
                    <div>
                      <label >Name :-</label>
                      <input type="text" className="form-control mb-3" name='lname' value={inputText.lname} onChange={handleInput} />
                      <label >Surname No:-</label>
                      <input type="text" className="form-control mb-3" name='fname' value={inputText.fname} onChange={handleInput} />
                      {/* <label >Contact No :-</label> */}
                      <input type="text" className="form-control mb-3" name='id' value={inputText.id} onChange={handleInput} hidden />
                      <label >Email :-</label>
                      <input type="text" className="form-control mb-3" name='email' value={inputText.email} onChange={handleInput} />
                      <label >Gender :-</label>
                      <input type="text" className="form-control mb-3" name='gender' value={inputText.gender} onChange={handleInput} />
                      <label >Email :-</label>
                      <input type="text" className="form-control mb-3" name='address' value={inputText.address} onChange={handleInput} />
                      <label >Age :-</label>
                      <input type="number" className="form-control mb-3" name='age' value={inputText.age} onChange={handleInput} />
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button type="submit" data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn Register bg-primary text-white p-3">Register</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Add