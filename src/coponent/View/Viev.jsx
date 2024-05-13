import React from 'react'
import { useState } from 'react';
import { getData } from '../Services/Helper'
import { useNavigate } from 'react-router-dom'
function Viev() {
    const [viewData, setViewData] = useState(getData());
    const navigate = useNavigate();

    const handleDelete = (id) => {

        let datas = getData();
        let deletedData = datas.filter((data) => {

            return id !== data.id;
        })
        setViewData(deletedData);

        localStorage.setItem("myData", JSON.stringify(deletedData));


    }


    const handleEdit = (id) => {

        let datas = viewData;

        let singleRecord = datas.filter((data) => {

            return data.id == id;

        })

        navigate('/editData', { state: singleRecord[0] });




    }
  return (
   <>
     <div className="pt-5">
            <table border="1" width="100%">
              <thead>
                <tr>
                  <th>
                    No.
                  </th>
                  <th>
                    Name.
                  </th>
                  <th>
                    sur Name.
                  </th>
                  <th>
                    Email.
                  </th>
                  <th>
                    address.
                  </th>
                  <th>
                    Age.
                  </th>
                  <th>
                    gender
                  </th>
                  <th>
                    update / Deleat
                  </th>
                </tr>
              </thead>
              <tbody id="table-data">
                {

                  viewData.map((data, index) => {

                      return (
                          <tr>
                              <td>{index + 1}</td>
                              <td>{
                                  data.fname
                              }</td>
                              <td>{
                                  data.lname
                              }</td>
                              <td>{
                                  data.email
                              }</td>
                              <td>{
                                  data.address
                              }</td>
                              <td>{
                                  data.age
                              }</td>
                              <td>{
                                  data.gender
                              }</td>
                              <td>
                                  <button class="btn  edit edit-btn bg-success text-white px-4 m-2" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => handleEdit(data.id)} type="submit"><i class="fa-solid fa-eye"></i></button>
                                  <button class="btn  del-btn trash bg-danger text-white px-4 m-2" onClick={() => handleDelete(data.id)} type="submit"><i class="fa-solid fa-trash"></i></button>
                              </td>
                          </tr>
                      )

                  })
                }
              </tbody>
            </table>
          </div>
   </>
  )
}

export default Viev