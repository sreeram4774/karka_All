const Personal =()=>{
    let object={
        name :"sreeram",
        age :24,
        place:"Nagercoil",
        mobile:9944540358
    }
    return(
        <>
            <h1>My Details</h1>
            <p>My Name is {object.name}</p>
            <p>My Age is {object.age}</p>
            <p>My Place is {object.place}</p>
            <p>My Number is {object.mobile}</p>
        </>
    )

}
export default Personal