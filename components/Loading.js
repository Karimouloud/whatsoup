import Loader from "react-loader-spinner";


function Loading() {
    return (
    
      <center style={{ display: "grid", placeItems: "center", height: "100vh" }} >
        <div>
          <img 
            src="123.jpg"
            alt="whatsoup logo"
            style={{ marginBottom: 10 }}
          />
          <Loader
            type="Puff"
            color="#3cbc28"
          />

        </div>
        
          

        
      </center>  
        
    )
}

export default Loading
