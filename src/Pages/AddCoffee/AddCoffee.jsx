import React from 'react';
import Navber from '../../MainLayout/Header/Navber';
import bg from '../../assets/more/11.png'

const AddCoffee = () => {
    return (
        <div className='font-Raleway'>
            <Navber></Navber>
            <div className='min-h-[100vh] md:py-10 py-3 md:my-10' style={{backgroundImage: `url(${bg})`,
            backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                <div>
                    <h1>Back to Home</h1>
                </div>
                <div className='bg-[#F4F3F0] md:w-[60%] m-auto md:p-10 p-3'>
                    <div className='text-center space-y-2'>
                        <h3 className='text-2xl font-bold text-[#372727]'>Add New Coffee</h3>
                        <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                    </div>

                    <form >
                       <div className='flex flex-col md:flex-row justify-between gap-5'>
                        <div className='flex-grow'> 
                            <div >
                                <label className='block my-2 font-bold text-[#372727]'>Name</label>
                                <input className='py-2 pl-3 rounded-md w-full' 
                                type="text" name='name'
                                placeholder='Enter coffee Name' />
                            </div>
                            <div>
                                <label className='block my-2 font-bold text-[#372727]'>Supplier</label>
                                <input className='py-2 pl-3 rounded-md w-full' 
                                type="text" name='supplier'
                                placeholder='Enter your Supplier' />
                            </div>
                            <div>
                                <label className='block my-2 font-bold text-[#372727]'>Category</label>
                                <input className='py-2 pl-3 rounded-md w-full' 
                                type="text" name='category'
                                placeholder='Enter coffee Category' />
                            </div>
                        </div>
                        <div className='flex-grow'>
                            <div>
                                <label className='block my-2 font-bold text-[#372727]'>Chef</label>
                                <input className='py-2 pl-3 rounded-md w-full' 
                                type="text" name='chef'
                                placeholder='Enter coffee Chef' />
                            </div>
                            <div>
                                <label className='block my-2 font-bold text-[#372727]'>Taste</label>
                                <input className='py-2 pl-3 rounded-md w-full' 
                                type="text" name='taste'
                                placeholder='Enter coffee teste' />
                            </div>
                            <div>
                                <label className='block my-2 font-bold text-[#372727]'>Details</label>
                                <input className='py-2 pl-3 rounded-md w-full' 
                                type="text" name='details'
                                placeholder='Enter coffee Details' />
                            </div>
                        </div> 
                       </div>
                            <div>
                                <label className='block my-2 font-bold text-[#372727]'>Photo URL</label>
                                <input className='py-2 pl-3 rounded-md w-full' 
                                type="text" name='photo '
                                placeholder='Enter photo URL' />
                            </div>
                            <input className='btn w-full mt-4 bg-[#D2B48C]' type="submit" value="Add Coffee" />
                    </form> 

                </div>   
            </div>
        </div>
    );
};

export default AddCoffee;