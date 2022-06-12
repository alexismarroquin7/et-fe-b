// components
import { AccountCircle } from "@mui/icons-material"
import { CircularProgress, Menu, MenuItem } from "@mui/material"

// widgets
import { Button, Grid, PrivateRoute } from "../../components"
import { TransactionList } from "../../widgets"
import { TransactionSearchBar } from "../../widgets/TransactionSearchBar"

// store
import { findAll } from "../../store/slices/transaction-slice";

// hooks
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

// utils
import { parseQuery, stringifyQuery } from "../../utils"
import { useRouter } from "next/router"
import { TransactionPageNavBar } from "../../widgets/TransactionPageNavBar"

const initialQuery = {
  sortBy: 'date',
  dir: 'desc',
  name: '',
  date_after: '',
  date_before: ''
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

    <TransactionPageNavBar/>

    <TransactionSearchBar
      query={query}
      setQuery={setQuery}
    />
    
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
      trx.error.message.length > 0 && (
      <Grid
        padding="1rem 0"
      >
        <p
          style={{color: "red"}}
        >{trx.error.message}</p>
      </Grid>
      )
    }

    {/* {
      !trx.loading &&
      trx.list.length === 0 && (
      <Grid
        padding="1rem 0"
      >
        <p>This list is empty.</p>
      </Grid>
      )
    } */}
    
    <style jsx>{`
      .transactions_page {
        width: 100%;
        display: flex;
        flex-flow: column wrap;
        align-items: center;        
      }
    `}</style>
  
  </div>
}