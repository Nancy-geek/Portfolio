import React from 'react'
import Swal from 'sweetalert2'   // download sweetalert package 
// or can use react hot-toast for this 

function Contact() {
  const [result, setResult] = React.useState("");

  const submitting = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b8723c9e-ca0c-463f-86bf-69c3165826ca");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      // setResult("Form Submitted Successfully");
      // event.target.reset();
     
      // Swal.fire({
      //   title: "Message sent successfully",
      //   text:"Thank you Connecting and Visiting the Portfolio !!",
      //   icon: "success",
      //   heightAuto:false,
      //   // height: '300px',
      //   padding:'10px',
      //   width: '16rem',
      // });

      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "message sent successfully"  
      });
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div id='Contact' className='m-4 p-4 '>
    <h1 className='text-3xl md:text-4xl text-emerald-200 space-x-2 pb-5 underline underline-offset-8 font-dancingCursive  font-semibold'>Contact ..</h1>

    <div className='m-2 p-5 text-white bg-slate-700   rounded'>
   
    <h1 className=' my-4 w-full text-2xl sm:text-3xl font-bold text-center space-x-2'>
      <span className='text-fuchsia-400'>Get</span> 
      <span className='text-purple-500'>In</span> 
      <span className='text-pink-400'>Touch</span> </h1> 

      <div className='flex justify-center'>
        <div className='md:w-1/3 flex justify-center items-center sm:block  hidden'><img className=' m-3 rounded-md text-3xl text-emerald-400 text-center' src="https://media.licdn.com/dms/image/D4D12AQHrCokf1Hxljw/article-cover_image-shrink_600_2000/0/1717059351461?e=2147483647&v=beta&t=vCD74FPN5u2k_TVIpwcgBY6gFwlLFaiVfuX5U0Y7GJQ"
         alt='Lets Connect...' /></div>

        <form onSubmit={submitting} className='w-full md:w-4/5 mx-3 p-1 sm:space-x-3 space-y-2 text-black font-semibold' action="">

          <div className='  w-full  px-2 m-1 mx-2 flex sm:justify-end'>
            <input className=' w-full md:w-4/5 h-9 m-2 rounded-md px-2 capitalize hover:border-2  border-fuchsia-600'
            type="text" placeholder='Name' name="your name" id="name" required/>
          </div>
          <div className=' w-full px-2 m-1 flex sm:justify-end'>
            <input className='w-full md:w-4/5 h-9 m-2 rounded-md  hover:border-2  border-fuchsia-600  px-2 '
            type="text" placeholder='E-mail' name="mail" id="name" required/>
          </div>
          <div className=' w-full  px-2 m-1 flex sm:justify-end border-fuchsia-400 border-width-1'>
            <input className='w-full md:w-4/5 h-9 m-2 rounded-md px-2 capitalize hover:border-2  border-fuchsia-600'
            type="text" placeholder='Phone' name="number" id="name" />
          </div>
          <div className=' w-full h-6 min-h-40  px-2 m-1 flex sm:justify-end'>
            <input className='w-full md:w-4/5 min-h-36  m-2 flex justify-start items-start rounded-md px-2 hover:border-2  border-fuchsia-600'
            type="text" placeholder='Message' name="message_me" id="name" />
          </div>

          <div className='w-full h-10 px-2 m-2  flex justify-center text-white' >
          <button type='submit' className=' p-3 flex justify-center items-center font-bold rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>Let's Connect</button>
          </div>
        </form>

        </div>
    </div>

    </div>
  )
}

export default Contact
