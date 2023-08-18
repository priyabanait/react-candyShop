import { useEffect, useState } from "react";
import axios from 'axios';
import Header from "./components/Header";
import Cart from "./components/Cart";
import ItemList from "./components/ItemList";
import classes from '../src/components/Form.module.css'
function App() {
  const[showCart,setShowCart]=useState(false);
  const[array,setArray]=useState([]); 
  const[data,setData]=useState({
    Name:'',
    Description:'',
    Price:''

});

let {Name,Description,Price}=data;
          function submitHandler(e){
        e.preventDefault();
        axios.post('https://crudcrud.com/api/031d13f012c947c3bb5473d5d2b3b347/cart',data
        ).then((res)=>{
          console.log(res.data);
        
        })
        setArray([...array,{Name,Description,Price}])
            setData({Name:'',Description:'',Price:''})
        
    }
   useEffect(()=>{
    axios.get('https://crudcrud.com/api/031d13f012c947c3bb5473d5d2b3b347/cart').then((response)=>{
      console.log(response.data);
      const post=[];
      for(let key in response.data){
          post.push({...response.data[key],id:key})
      }
      setArray([...post]);
      console.log(setArray([...post]));
    }).catch((error) => {
      console.error('Fetch error:', error);
    });
   })
    
        function handle(e){
            let name=e.target.name;
            let value=e.target.value;
            setData({...data,[name]:value})
            }

            
       
  function handleCart(value){
    setShowCart(value);
	}
  return (
    <div >
<Header count={array.length} handleCart={handleCart}></Header>
{
  showCart? <Cart array={array}></Cart>: <div className={classes.control}>
    <div >
      <label htmlFor='name'>Candy Name</label>
      <input onChange={handle} type='text' id='name' name='Name' value={data.Name}/>
    </div>
    <div >
      <label htmlFor='description'>Description</label>
      <input onChange={handle} type='text' id='description' name='Description' value={data.Description}/>
    </div>
    <div >
      <label htmlFor='price'>Price</label>
      <input onChange={handle}type='number' id='price' name='Price' value={data.Price}/>
    </div>
    <button onClick={submitHandler}>Add</button>
   <ItemList array={array}></ItemList>

    </div>
}


     
     
    </div>
  );
}

export default App;
