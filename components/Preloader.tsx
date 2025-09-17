
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
        <div className=' opacity-0 loader_div flex justify-center items-center w-screen h-screen'>

  <SpinnerDotted size={200} thickness={100} speed={90} color="#fff" />

        </div>

//          <DotLottieReact
//    className=""
//       src="https://lottie.host/3ec27837-6a0e-467b-94dd-467f8a54729d/D5YfCQ7TU2.lottie"
//       loop
//       autoplay
//     />
    )
}