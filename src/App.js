// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  

const Owner = ["singdha",'Sami',"Abdhullah","rashida","sultana"];

const products = [
  {name:'Photoshop',price:'$90.99'},
  {name:'PdfReader',price:'$70.99'},
  {name:'PSD',price:'$800.99'}
]

const ownerName =Owner.map(owner=>owner);
console.log(ownerName);

const productName = products.map(x=>x.name)
console.log(productName);

  return (
  
    <div className="App">
      <header className="App-header">
        <h1>React Core  Concept🧡</h1>



      <DynamicUser></DynamicUser>
        <Counter></Counter>
        <ul>
       {
          ownerName.map(owners=><li>{owners}</li>)
       }


       {
         products.map(y=><li>{y.name}</li>)
       }
        </ul>


{
  products.map(x=><Product item={x}></Product>)
}
       <Product item={products[0]}></Product>
      
        <Persons2 name="Jony" city= 'dhaka'></Persons2>

      </header>
    </div>
  );
}
// *******************************for component 32-6   *******************************


function Product(props){
  const productStyle = {
    border:'1px solid grey',
    borderRadius:'10px',
    backgroundColor:'grey',
    height:'350px',
    width:'300px',
    margin:'10px'
  }


  const {name,price} = props.item
  
  return(
    <div style={productStyle}>
      {/* <h3>{props.name}</h3>
      <h1>{props.price}</h1>
      <p>{props.des}</p>
      <button>Buy now</button> */}


      <h3>{name}</h3>
      <h1>{price}</h1>
     
      <button>Buy now</button>

    </div>
  )
}



function Persons2(props){ 
  // for multiple componnet 
  return (
    <div style ={{border:"2px solid red", margin:'10px',padding:'15px'}}>
      <h3>Owner Name:  {props.name}</h3>
  <h4>City Name: {props.city}</h4>
    </div>
  )
}

//counter**

function Counter(){
  const [count, setCount] = useState(10);
const increase=()=>{
  const newCount =count+1;
  setCount(newCount);
}

// decrasing value***
var decrease= () =>{
 setCount(count-1)
}


var btnStyle={
  padding:'10px',
  margin:'5px',
  
  fontSize:"30px",
  width:'50px'

      
}
  return(
  
    
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increase} style={btnStyle}> + </button>
      <button onClick={decrease}style={btnStyle}> - </button>
     
    </div>
  )
}

//Dynamic user using API and fetch Data

function DynamicUser (){

  const [user,setUser] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res =>res.json())
    .then(data =>setUser(data))
   
  }, [])
  return(
    <div>
      <h1>DYNAMIC USER: {user.length}</h1>

      <ul>
        {
          user.map(x=><li>{x.email}</li>)
        }
      </ul>
    
    </div>
  )

}




export default App;
