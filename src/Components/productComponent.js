import { useContext, useState } from "react"
import { Button, Card } from "react-bootstrap";
import { data } from "../data"
import './product.css'

export function ProductComponent (){
    const [card, setCard] = useState(data);
    const [item, setItems] = useState(0);

    return (
        <div>
          <div className="header">
            <h1>Shop in style</h1>
            <h5>With this shop homepage template</h5>
            <h3>Cart :{item}</h3>
          </div>
            
            <div breakpoints={['xxl','xl']} className="container"><div className="row">
           {card.map((prod, idx)=> (
           <CardDetails
            key = {idx}

            dimension={prod.dimension}
            title ={prod.title}
            rating ={prod.rating}
            price ={prod.price}
            disprice ={prod.disprice}
            buttonName={prod.buttonName}
            changedname={prod.changedname}
            idx = {idx}
            setItems = {setItems}
            setCard = {setCard}
            item ={item}
            card ={card}
           />
           ))}
    
        </div>
        </div></div>
        
    )
}


function CardDetails ({setCard, setItems, idx , item,dimension,title,rating,price,disprice,buttonName,changedname}) {
   let count = 0
    const [showBtn, setShowBtn] = useState(true);
    const handleCartAdd = (idx, setItems, item) => {
        setShowBtn(!showBtn)
        setItems(item + 1)
 
    }
    const handleCartRemove = (idx, setItems , item, setCard) =>{
       setShowBtn(!showBtn)
       setItems(item - 1)
      ///
    }

    return(
    <Card style={{ width: '17rem',margin:"20px" ,height:"25rem"}} >
    <div className="dimensions">{dimension}</div>
    <Card.Body style={{padding:"10px"}}>
      <Card.Title>{title}</Card.Title>
      <p >RS. <s>{price}</s>{disprice}</p>
      <p className="rating-data">{rating}</p>
      <Card.Text>
        
      </Card.Text>
      <div className="btn-area">
        
          {buttonName == "Add to cart" ? showBtn ? <Button  className="btn" onClick={()=>handleCartAdd(idx, setItems, item)} variant="primary">{buttonName}</Button>: 
          <Button className="btn" onClick={()=>handleCartRemove(idx, setItems, item , setCard)} variant="secondary">{changedname}</Button>  :<Button className="btn" >{buttonName}</Button>
        }
        
    </div>
    </Card.Body>
    
  </Card>
    )

}