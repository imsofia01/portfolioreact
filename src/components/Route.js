import { Route, Routes } from "react-router-dom";


const Route = () => {
    return(
        <div>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>}/>
      </Routes>
    </div>

    )

}

export default Route