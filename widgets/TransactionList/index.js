import { Grid } from "../../components"
import { TransactionItem } from "../TransactionItem"

const properties = [
  {
    name: 'date'
  },
  {
    name: 'type'
  },
  {
    name: 'amount'
  },
  {
    name: 'category'
  },
  {
    name: 'name'
  },
  // {
  //   name: 'description'
  // },
]

export const TransactionList = ({transactions = []}) => {
  return <Grid
    width="100%"
    ff="col"
    ai="center"
  >
    <Grid
      width="90%"
    >
      <p>results: {transactions.length}</p>
    </Grid>

    <table>

      <thead>
        <tr>
          {properties.map(prop => {
            return <th
            key={prop.name}
            >{prop.name}</th>
          })}
        </tr>
      </thead>

      <tbody>
        {transactions.length > 0 && transactions.map((trx, i) => {
          return (
            <TransactionItem key={trx.id} transaction={trx} index={i}/>
          )
        })}
      </tbody>

    </table>

    <style jsx="true">{`
      
      table {
        border-collapse: collapse;
      }

      tr {
        border: 1px solid #eee;
      }
      
      th {
        border: 1px solid #ddd;
        background-color: #eee;
      }

    `}</style>

  </Grid>
}