
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SpinnerDotted } from 'spinners-react';

export default function Preloader(){
useGSAP(()=>{
    gsap.to("div",{
        opacity:1
    })
})
    return(
        <div className=' opacity-0 absolute top-0 loader_div flex justify-center items-center w-screen h-screen'>

  <SpinnerDotted size={200} thickness={100} speed={90} color="#fff" />

        </div>


    )
}