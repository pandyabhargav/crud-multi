
import { useLocation, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import { getData } from '../Services/Helper'


function Edit() {
    const { state } = useLocation();

    const [inputText, setInputText] = useState({
        id: '',
        fname: '',
        lname: '',
        email: '',
        address: ''
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


        let updatedData = viewData.map((data) => {
            if (data.id == inputText.id) {
                return data = inputText;
            } else {
                return data;
            }
        })

        setInputText({
            id: '',
            fname: '',
            lname: '',
            email: '',
            address: ''
        })
        localStorage.setItem('myData', JSON.stringify(updatedData));
        navigate('/viewData');
    }

    useEffect(() => {
        setInputText(state);
    }, [])

  return (
    <div className="d-flex flex-wrap">
    <form className="d-flex flex-wrap justify-content-center m-5" onSubmit={handleSubmit}>
      <div className="col-4">
        <div className="img d-flex">
          {/* <img src="image/add-user.png" className="justify-content-start d-flex"
            alt="img" />
          <i className="fa-solid fa-plus"></i>
          <input type="file" /> */}
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
  )

}

export default Edit