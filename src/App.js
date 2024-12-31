
// import './App.css';
import Cards from './components/Cards'
import Navbar from './components/Navbar';

function App() {
  return (
    <> <Navbar/>
  
     <div className = "d-flex gap-7 justify-content-center pt-5" >
     
     <Cards title = "JavaScript" src = "https://images.pexels.com/photos/12899188/pexels-photo-12899188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
     prag = "lorem34 , thuis is a card for javascript and must be used to javascript for showing multiple contents"
     />
     <Cards title ="Nodejs" src = "https://images.pexels.com/photos/12899188/pexels-photo-12899188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" prag = "lorem34 , thuis is a card for NodeJs and must be used to NodeJs for showing multiple contents" />

     <Cards title ="Reactjs" src = "https://images.pexels.com/photos/12899188/pexels-photo-12899188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" prag = "lorem34 , thuis is a card for React and must be used to ReactJs for showing multiple contents" />

    

     </div>
     </>
       
  );
}

export default App;
