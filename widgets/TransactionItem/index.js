import { Grid } from "../../components"
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import { ArrowForward } from "@mui/icons-material";

const amountAsDollar = (amt) => {
  if(amt < 0){
    let str = String(amt);
    str = str.slice(1, str.length);
    return `-$${Number(str).toFixed(2)}`;
  } else {
    return `$${amt.toFixed(2)}`;
  }
}

export const TransactionItem = ({transaction, index}) => {
  const [hidden, setHidden] = useState({
    description: true
  });

  const {
    id,
    properties
  } = transaction;

  const name = properties.name.title.length > 0
  ? properties.name.title[0].text.content
  : '';
  
  const type = properties.type.select.name;
  
  const amount = properties.amount.number.toFixed(2);

  const date = properties.date.date.start;

  const category = properties.category.select.name;

  return (
    <tr
      // style={{
        // border: "1px solid #eee"
      // }}
    
    >
      <td
        style={{
          border: "1px solid #eee"
        }}
      >{date}</td>
      <td
        style={{
          border: "1px solid #eee"
        }}
      >{type}</td>
      <td
        style={{
          border: "1px solid #eee"
        }}
      >${amount}</td>
      <td
        style={{
          border: "1px solid #eee"
        }}
      >{category}</td>
      <td
        style={{
          border: "1px solid #eee"
        }}
      >{name}</td>
      
      <style jsx="true">{`
        tr {
          padding: 1rem;
        }  
      `}</style>
    
    </tr>
  )
}
  
  // <Grid
  //   container
  //   ff="col"
  //   ai="center"
  //   bc={index % 2 === 0 ? "#eeeeee" : "#ffffff"}
  //   padding="1rem 0"
  // >
  //   <Grid
  //     width="90%"
  //     jc="flex-end"
  //     ai="center"
  //   >
  //     <ArrowForward
  //       onClick={() => {
  //         navigate(`/transactions/${id}`)
  //       }}
  //     />
  //   </Grid>

  //   <Grid
  //     width="90%"
  //     jc="space-between"
  //   >
  //     <p>Date:</p>
  //     <p>{date.date.start}</p>
  //   </Grid>
    
  //   <Grid
  //     width="90%"
  //     jc="space-between"
  //   >
  //     <p>Type:</p>
  //     <p 
  //       style={{
  //         backgroundColor: type.select.color,
  //         color: 'white',
  //         borderRadius: '50px',
  //         padding: '.2rem .5rem'
  //       }}
  //     >{type.select.name}</p>
  //   </Grid> 
    
  //   <Grid
  //     width="90%"
  //     jc="space-between"
  //   >
  //     <p>Amount:</p>
  //     <p style={{color: type.select.color}}>{amountAsDollar(amount.number)}</p>
  //   </Grid> 
    
  //   <Grid
  //     width="90%"
  //     jc="space-between"
  //     >
  //     <p>Category:</p>
  //     <p
  //       style={{
  //         backgroundColor: category.select.color,
  //         padding: '.2rem .5rem',
  //         borderRadius: "50px"
  //       }}
  //     >{category.select.name}</p>
  //   </Grid>

  //   <Grid
  //     width="90%"
  //     jc="space-between"
  //   > 
  //     <p>Name:</p>
  //     <p>{name && name.title.length > 0 && name.title[0].text.content}</p>
  //   </Grid>

  //   <Grid
  //     width="90%"
  //     ff="col"
  //     ai="center"
  //   >
  //     <Grid
  //       width="100%"
  //       jc="space-between"
  //       ai="center"
  //     >
  //       <p>Description:</p>
  //       <AddIcon
  //         onClick={() => {
  //           setHidden({
  //             ...hidden,
  //             description: !hidden.description
  //           });
  //         }}
  //         style={{transform: hidden.description ? 'rotate(0deg)' : 'rotate(90deg)'}}
  //       />
  //     </Grid>
  //     {
  //       !hidden.description && 
  //       <Grid
  //         width="100%"
  //         br="5px"
  //         bc={index % 2 === 0 ? "#fff" : "#eee"}
  //       >
  //         <p
  //           style={{
  //             padding: description &&
  //             description.rich_text.length > 0 
  //             ? "0 .5rem" 
  //             : "0 1.5rem"
  //           }}
  //         >
  //           { 
  //             description &&
  //             description.rich_text.length > 0 &&
  //             description.rich_text[0].text.content
  //           }
  //         </p>

  //       </Grid>
  //     }
  //   </Grid>

  // </Grid>
