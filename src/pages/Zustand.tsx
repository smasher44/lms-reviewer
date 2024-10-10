// import useStore from "../store/test/useStore";


const ZustandPage = () => {
  // const SIGN_IN_USER_DETAILS = useStore((state) => state.reducers.SIGN_IN_USER);
  // const CLEAR_INFO = useStore((state) => state.reducers.LOG_OUT_USER);

   // ways of retrieving data
  //  const details = useStore((state) => state.userData)
  //  console.log("🚀 ~ details:", details)

  // const handleOnClickSignInUser = () => {
  //   SIGN_IN_USER_DETAILS({
  //     email: "George",
  //     password: "Pogiako@123"
  //   })
  // }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}> 
      <h1 style={{ margin: 0 }}>{`Zustand Page`}</h1>
      {/* <h1 style={{ margin: 0 }}>{`Email: ${details?.email}`}</h1>
      <h1 style={{ margin: 0 }}>{`Password: ${details?.password}`}</h1>
      <div style={{ display: "flex" , gap: 20}}>
        <button onClick={handleOnClickSignInUser}>Dispatch</button>
        <button onClick={() => CLEAR_INFO()}>Clear Info</button>
      </div> */}
    </div>
  )

}


export default ZustandPage
