import React from 'react';
import Navber from '../../MainLayout/Header/Navber';
import bg from '../../assets/more/11.png'
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FaArrowLeft } from 'react-icons/fa';

const UpdateCoffee = () => {
    const navigate = useNavigate()

    const coffee = useLoaderData()
    const {_id, name, category, chef, details, photo, supplier, taste} = coffee;

    const handleUpdateCoffee = e => {
        e.preventDefault(); 

        const form = e.target; 
        const name = form.name.value; 
        const supplier = form.supplier.value; 
        const category = form.category.value; 
        const chef = form.chef.value; 
        const taste = form.taste.value; 
        const details = form.details.value; 
        const photo = form.photo.value; 

        const   updateCoffee = {name, supplier, category, chef, taste, details, photo}
        console.log(updateCoffee);

        fetch(`https://espresso-emporium-server-6xqe1i7nh-shamim-rezas-projects.vercel.app/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateCoffee) 
        }) 
       .then(res => res.json()) 
       .then(data => {
        console.log(data);
        if(data.modifiedCount > 0){
            Swal.fire(
                'Update Successful',
                'Before Update',
                'success'
              )
              navigate('/')
        }
        else if (data.modifiedCount === 0) {
            Swal.fire(
                'Need Some Changes',
                'Before Update',
              ) 
        }
       })  

    }

    return (
        <div className='font-Raleway'>
            <Navber></Navber>
            <div className='min-h-[100vh] md:py-10 py-3 md:my-10' style={{backgroundImage: `url(${bg})`,
            backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                <div className="md:w-[60%] m-auto mb-4">
            <Link className="flex items-center gap-2 hover:underline " to="/"> <FaArrowLeft></FaArrowLeft> Back to Home</Link>
            </div>
                <div className='bg-[#F4F3F0] md:w-[60%] m-auto md:p-10 p-3'>
                    <div className='text-center space-y-2'>
                        <h3 className='text-2xl font-bold text-[#372727]'>Update Existing Coffee Details</h3> 
                        <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                    </div>

                    <form onSubmit={handleUpdateCoffee} >
                       <div className='flex flex-col md:flex-row justify-between gap-5'>
                        <div className='flex-grow'> 
                            <div >
                                <label className='block my-2 font-bold text-[#372727]'>Name</label>
                                <input className='py-2 pl-3 rounded-md w-full' 
                                type="text" name='name' defaultValue={name}
                                placeholder='Enter coffee Name' />
                            </div>
                            <div>
                                <label className='block my-2 font-bold text-[#372727]'>Supplier</label>
                                <input className='py-2 pl-3 rounded-md w-full' 
                                type="text" name='supplier' defaultValue={supplier}
                                placeholder='Enter your Supplier' />
                            </div>
                            <div>
                                <label className='block my-2 font-bold text-[#372727]'>Category</label>
                                <input className='py-2 pl-3 rounded-md w-full' 
                                type="text" name='category' defaultValue={supplier}
                                placeholder='Enter coffee Category' />
                            </div>
                        </div>
                        <div className='flex-grow'>
                            <div>
                                <label className='block my-2 font-bold text-[#372727]'>Chef</label>
                                <input className='py-2 pl-3 rounded-md w-full' 
                                type="text" name='chef' defaultValue={chef}
                                placeholder='Enter coffee Chef' />
                            </div>
                            <div>
                                <label className='block my-2 font-bold text-[#372727]'>Taste</label>
                                <input className='py-2 pl-3 rounded-md w-full' 
                                type="text" name='taste' defaultValue={taste}
                                placeholder='Enter coffee teste' />
                            </div>
                            <div>
                                <label className='block my-2 font-bold text-[#372727]'>Details</label>
                                <input className='py-2 pl-3 rounded-md w-full' 
                                type="text" name='details' defaultValue={details}
                                placeholder='Enter coffee Details' />
                            </div>
                        </div> 
                       </div>
                            <div>
                                <label className='block my-2 font-bold text-[#372727]'>Photo URL</label>
                                <input className='py-2 pl-3 rounded-md w-full' 
                                type="text" name='photo' defaultValue={photo}
                                placeholder='Enter photo URL' />
                            </div>
                            <input className='btn w-full mt-4 bg-[#D2B48C]' type="submit" value="Update Coffee Details" />
                    </form> 

                </div>   
            </div>
        </div>
    );
};

export default UpdateCoffee;