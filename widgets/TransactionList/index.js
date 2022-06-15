import { TransactionItem } from "../TransactionItem"

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import WidgetsIcon from '@mui/icons-material/Widgets';
import AbcIcon from '@mui/icons-material/Abc';

const properties = [
  {
    name: 'Date',
    icon: <CalendarMonthIcon/>
  },
  {
    name: 'Type',
    icon: <CreditCardIcon/>
  },
  {
    name: 'Amount',
    icon: <AttachMoneyIcon/>
  },
  {
    name: 'Category',
    icon: <WidgetsIcon/>
  },
  {
    name: 'Name',
    icon: <AbcIcon/>
  }
]

export const TransactionList = ({transactions = []}) => {

  const handleScroll = e => {
    e.stopPropagation();

    if(typeof window !== 'undefined'){
      window.scroll({
        top: 0,
        behavior: "smooth"
      })
    }
  }

  return <div
    className="transaction_list"
  >

    <table>

      <thead>
        <tr>
          {properties.map(prop => {
            return <th
              key={prop.name}
            >
              <div
              className="table_header"
              >
                {prop.icon}
                {prop.name}
              </div>
            </th>
          })}
        </tr>
      </thead>

      <tbody
      >
        {transactions.length > 0 && transactions.map((trx, i) => {
          return (
            <TransactionItem key={trx.id} transaction={trx} index={i} />
          )
        })}
      </tbody>

    </table>

    <button
      className="scroll_to_top"
      onClick={handleScroll}
    >Scroll To Top</button>

    <style jsx>{`

      .transaction_list {
        position: absolute;
        z-index: 0;
        top: 20.5%;
        width: 100%;
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        gap: 2rem;
        padding-bottom: 2rem;
      }
      
      table {
        width: 100%;
        border-collapse: collapse;
      }
      
      tr {
        width: 100%;
        position: sticky;
        z-index: 1;
        top: 20.5%;
        left: 0;
      }
      
      th {
        background-color: #eee;
      }
      
      .table_header {
        padding: 1rem 0;
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: center;
      }
      
      .scroll_to_top {
        font-weight: bold;
        border: 0;
        color: #4285F4;
        background-color: transparent;
        padding: .5rem;
        border-radius: .5rem;
        border: 1px solid transparent;
      }
      
      .scroll_to_top:hover {
        border-color: #eee;
        background-color: #eee;
      }

    `}</style>

  </div>
}