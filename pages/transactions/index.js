// components
import { CircularProgress } from "@mui/material"

// widgets
import { Grid } from "../../components"
import { TransactionList } from "../../widgets"
import { TransactionSearchBar } from "../../widgets/TransactionSearchBar"

// store
import { findAll } from "../../store/slices/transaction-slice";

// hooks
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

// utils
import { stringifyQuery } from "../../utils"
import { useRouter } from "next/router"
import { TransactionPageNavBar } from "../../widgets/TransactionPageNavBar"

const initialQuery = {
  sortBy: 'date',
  dir: 'desc',
  name: '',
  date_after: '',
  date_before: ''
}

const calcBalance = (nums = []) => {
  let amount = 0;

  nums.forEach(num => {
    amount += num;
  });

  return `${amount < 0 ? '-' : ''}$${(amount * (amount < 0 ? -1 : 1)).toFixed(2)}`;
}

export default function TransactionsPage () {
  const dispatch = useDispatch();
  
  const trx = useSelector(s => s.transaction);
  
  const [query, setQuery] = useState(initialQuery);

  const router = useRouter();

  useEffect(() => {
    if(!router.isReady) return;
    setQuery({
      sortBy: router.query.sortBy || 'date',
      dir: router.query.dir || 'desc',
      date_after: router.query.date_after || '',
      date_before: router.query.date_before || '',
    });
  }, [router.isReady, router.query]);
  
  useEffect(() => {
    if(router.asPath.split('?').length === 2 && router.asPath.split('?')[1] === stringifyQuery(query).slice(1)) return;
    if(!router.isReady) return;
    dispatch(findAll(query));
    router.push(`/transactions${stringifyQuery(query)}`);
  }, [dispatch, query]); // eslint-disable-line

  return <div
    className="transactions_page"
  >
    <div
      className="sticky_nav"
    >
      <TransactionPageNavBar/>

      <TransactionSearchBar
        query={query}
        setQuery={setQuery}
      />

      <div
        className="transaction_context"
      >
        <p>Results: {trx.list.length}</p>
        <p
          className={`balance ${calcBalance(trx.list.map(item => item.properties.amount.number))[0] === '-' ? 'negative_balance' : ''}`}
        >{calcBalance(trx.list.map(item => item.properties.amount.number))}</p>
      </div>
    </div>
    
    {trx.loading && <Grid
      padding="1rem 0"
    >
      <CircularProgress />
    </Grid>}

    {
      !trx.loading &&
      trx.list.length > 0 &&
      trx.error.message.length === 0 &&
      <TransactionList transactions={trx.list}/>
    }
    
    {
      !trx.loading &&
      trx.error.message.length !== 0 && (
      <div>
        <p
          style={{color: "red"}}
        >{trx.error.message}</p>
      </div>
      )
    }

    {
      !trx.loading &&
      trx.list.length === 0 && (
      <div
        padding="1rem 0"
      >
        <p>This list is empty.</p>
      </div>
      )
    }
    
    <style jsx>{`
      .transactions_page {
        width: 100%;
        display: flex;
        flex-flow: column wrap;
        align-items: center;
      }
      
      .sticky_nav {
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1;
        box-shadow: 1px 1px 10px #eee;
      }

      .transaction_context {
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        background: white;
        border-bottom: 1px solid #ddd;
        padding: 0 2.5rem;
        font-weight: bold;
      }

      p.balance {
        color: #1aa260;
      }

      p.negative_balance {
        color: #de5246;
      }
    
    `}</style>
  
  </div>
}