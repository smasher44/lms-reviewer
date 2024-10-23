/**@format */

import { Suspense } from "react"

// this can be changed into a proper loading fallback screen
const Fallback = () => (
  <div className="flex justify-center items-center h-screen">
    <p>Loading...</p> 
  </div>
)

const Loader = (Component: React.FC) => (props:object) => (
  <Suspense fallback={<Fallback/>}>
    <Component {...props}/>
  </Suspense>
) 

export default Loader;