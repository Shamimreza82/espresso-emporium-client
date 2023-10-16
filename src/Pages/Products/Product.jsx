import React from 'react';
import { Link } from 'react-router-dom';
import { MdEditSquare, MdEditOff, MdDelete  } from "react-icons/md";
import Swal from 'sweetalert2';

const Product = ({coffee, coffees, setCoffees}) => {
    const {_id, name, category, chef, details, photo, supplier, taste} = coffee; 


    const handleDeleted = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {

            if (result.isConfirmed) {
            fetch(`https://espresso-emporium-server-6xqe1i7nh-shamim-rezas-projects.vercel.app/coffee/${_id}`, {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0) {
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                    const remaning = coffees.filter(coffee => coffee._id !== _id); 
                    setCoffees(remaning) 
                }

                
            })

            }
          })

       
    }
    
    return (
        <div>
            <div className='flex justify-around items-center bg-[#F5F4F1] py-8 rounded-md font-Raleway px-2 '>
                <img className='min-h-fit' src={photo} alt="" />
                <div className='space-y-2'>
                    <h1 className='md:text-base text-sm'><strong>Name:</strong> {name}</h1>
                    <h2 className='md:text-base text-sm'><strong>Chef:</strong> {chef}</h2>
                    <h3 className='md:text-base text-sm'><strong>Details: </strong>{details}</h3>
                    <h4 className='md:text-base text-sm'><strong>Price:</strong> 890 TK </h4>
                </div>
                <div className=''>
                    <Link to={`/CoffeeDetails/${_id}`}><MdEditSquare className='bg-[#D2B48C] p-2 text-4xl rounded-md text-white mb-1'></MdEditSquare></Link>
                    <Link to={`/updateCoffee/${_id}`} ><MdEditOff className='bg-[#3C393B] p-2 text-4xl rounded-md text-white mb-1'></MdEditOff></Link>
                    <Link onClick={() => handleDeleted(_id)}><MdDelete className='bg-[#EA4744] p-2 text-4xl rounded-md text-white'></MdDelete></Link>
                </div>
            </div>
        </div>
    );
};

export default Product;