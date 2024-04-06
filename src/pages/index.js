// import {Metadata} from 'next'

// export const Metadata: Metadata={
//   title: 'belajar nextjs',
//   description: 'ini adalah pembelajaran metadata pada next',
// }
export default function Home() {
  
  return (
   <p >  
      <h1>selamat datang di website pandaku</h1>
      <img src="/images/logo/panda11.png" alt="panda logo" width={200} />
      <div>website ini menceritakan tentang kehidupan panda</div>
      </p>
      
  );
}