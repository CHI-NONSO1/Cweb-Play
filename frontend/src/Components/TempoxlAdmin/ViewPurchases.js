import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../CSS/ViewPurchases.scss';

export default function ViewPurchases() {
 
  const [purchases, setPurchases] = useState([]);
  const [token, setToken] = useState(" ");
  
  
  useEffect(() =>{
  
    const edit = localStorage.getItem('Admintoken');
    setToken(edit);
  
  
  
    const Purchases = async () => {
      try {
         
          const hist = await axios.get('http://localhost:8000/purchase/paid');
          
          setPurchases(hist.data);
        
         
      } catch (error) {
          if (error.res) {
              
              
          }
      }
    }
   
    
    
    Purchases()

  },[])

  const deletePurchase = async (purchaseid) => {
    await axios.delete(`http://localhost:8000/purchase/${purchaseid}`);
  
    const getPurchases = async () => {
      try {
            await axios.get(`http://localhost:8000/purchase/paid`)   
      .then(res => setPurchases(res.data))
  
    } catch (error) {
      if (error.data) {   
      }
    }
    
    }
  getPurchases()
  }



  return (
    <div>
   {!purchases ?
   <div>
    {"Loading . . ."}
    </div> 
    :   
    
    purchases.map((paid, index) => (
      
    <React.Fragment  key={paid.purchaseid}>
      
    <div><span>First Name: </span>{paid.firstname}</div>
    <div><span>Last Name: </span>{paid.lastname}</div>
    <div><span>Phone Number: </span>{paid.phoneno}</div>
    <div><span>Email: </span>{paid.email}</div>
    <div><span>Amount Paid: </span>{paid.purchase}</div>

    {paid.songtitle ? (
      <div><span>Song Name: </span>{paid.songtitle}</div>
    ):(null)}

    {paid.lyricsname ? (
      <div><span>Lyrics Name: </span>{paid.lyricsname}</div>
    ):(null)}
    
    
    <div><span>Date Paid: </span>{paid.createdAt}</div>
    <p>
    {token?(
    <span>
    <button onClick={ () => deletePurchase(paid.purchaseid) } 
    className="btn_del">Del Purchase</button>
    </span>
    ):( null)
  
  }

   </p>
    </React.Fragment>
    
    ))
}
</div>
  )
}
