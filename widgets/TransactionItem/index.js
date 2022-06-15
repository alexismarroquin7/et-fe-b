
import { useState } from "react";

const formatAmount = (amt) => {
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
  
  const amount = formatAmount(properties.amount.number);

  const date = properties.date.date.start;

  const category = properties.category.select.name;

  return (
    <tr>
      
      <td>
        {date}
      </td>

      <td
        className={`${type}`}
      >{type}</td>
      
      <td
        className="amount"
      >{amount}</td>
      
      <td>{category}</td>
      
      <td>{name}</td>
      
      <style jsx>{`
        tr {
          padding: 1rem;
        }  
        
        td {
          border: 1px solid #eee;
          padding: 1rem;
        }
        
        .deposit {
          color: #0F9D58;
        }
        
        .withdrawal {
          color: #DB4437;
        }

        .amount {
          text-align: right;
        }
      `}</style>
    
    </tr>
  )
}