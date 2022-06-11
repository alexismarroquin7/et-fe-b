import  { useEffect, useState } from "react";
import { Box, Modal } from "@mui/material";
import { Button, Grid } from "../../components";
import CheckIcon from '@mui/icons-material/Check';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { KeyboardArrowDown } from "@mui/icons-material";
import { SortByModal } from "./SortByModal";

const classes = {
  modal: {
    width: '100%',
    display: 'flex',
    flexFlow: 'column wrap',
    alignItems: "center",
    position: 'absolute',
    bottom: '0',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: '4rem 0',
    gap: "1rem"
  }
};

const initialOpen = {
  sortBy: false,
  dir: false,
  dateRange: false
}

const createDirText = (query) => {
  let dt = '';
  
  switch(query.dir){
    case 'desc':

      switch(query.sortBy){
        case 'date':
          dt = 'Newest';
          break
        
        case 'name':
          dt = 'Z-A';
          break
        
        default:
          throw Error(`unknown query.sortBy: ${query.dir}`)
      }
      
      break
      
      case 'asc':
        switch(query.sortBy){
          case 'date':
            dt = 'Oldest';
            break
          
          case 'name':
            dt = 'A-Z';
            break
          
          default:
            throw Error(`unknown query.sortBy: ${query.dir}`)
        }
      break
    
    default:
      throw Error(`unknown query.dir: ${query.dir}`)
        
  }

  return dt;
}

export const TransactionSearchBar = ({query, setQuery}) => {

  const [open, setOpen] = useState(initialOpen);

  const handleOpen = key => setOpen({...open, [key]: true});
  const handleClose = key => setOpen({...open, [key]: false});

  const handleChange = e => {
    setQuery({...query, [e.target.name]: e.target.value});
  }

  const [dirText, setDirText] = useState(() => {
    return createDirText(query);
  });

  useEffect(() => {
    setDirText(createDirText(query));
  }, [query]);

  return <div
    className="transaction_search_bar"
  >
    <div
      className="filter_group"
    >
      <div
        className="filter_group_a"
      >
        <button
          name="sortBy"
          onClick={() => handleOpen('sortBy')}
        >
          {query.sortBy === 'date' && 'Sort By'}
          {query.sortBy === 'name' && 'Name'}
          <KeyboardArrowDown/>
        </button>

        <SortByModal
          open={open.sortBy}
          onClose={() => handleClose('sortBy')}
          setQuery={setQuery}
          query={query}
        />

        <button
          name="dateRange"
          onClick={() => handleOpen('dateRange')}
        >
          Date Range
          <KeyboardArrowDown/>
        </button>
        
        <Modal
          open={open.dateRange}
          onClose={() => handleClose('dateRange')}
        >
          <Box sx={classes.modal}>
            <Grid
              width="90%"
              jc="space-between"
              ai="center"
            >
              <label>AFTER</label>
              <input
                type="date"
                name="date_after"
                value={query.date_after}
                onChange={handleChange}
              />
            </Grid>
            <Grid
              width="90%"
              jc="space-between"
              ai="center"
            >
              <label>BEFORE</label>
              <input
                type="date"
                name="date_before"
                value={query.date_before}
                onChange={handleChange}
                min={query.date_after}
              />
            </Grid>
          </Box>
        </Modal>
      </div>

      <button
        name="dir"
        onClick={() => {
          setQuery({
            ...query,
            dir: query.dir === 'asc' ? 'desc' : 'asc'
          });
        }}
      >
        <p>{dirText}</p>
        <ArrowDownwardIcon
          sx={{
            transform: query.dir === 'asc' ? 'rotate(180deg) scale(.7)' : 'rotate(0deg) scale(.7)',
            transition: '.2s',
          }}
        />
      </button>
    </div>

    <style jsx>{`
      
      .transaction_search_bar {
        width: 100%;
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        border: 1px solid #ddd;
      }
      
      .filter_group {
        width: 90%;
        display: flex;
        flex-flow: row wrap;
        gap: 1rem;
        padding: .5rem 0;
        justify-content: space-between;
      }
      
      .filter_group_a {
        display: flex;
        flex-flow: row wrap;
        gap: 1rem;
      }

      button {
        border: 1px solid #eee;
        background-color: transparent;
        padding: .5rem 1rem;
        border-radius: 2rem;
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        gap: .1rem;
      }

      button[name=dir] {
        padding: 0rem 1rem;
        padding: 0;
        border: 0;
        color: #4285F4;
      }
      
      button[name=sortBy] {
        background-color: ${query.sortBy === 'date' ? 'transparent' : 'black'};
        color: ${query.sortBy === 'date' ? 'black' : 'white'};
      }
      
      button[name=dateRange] {
        background-color: ${query.date_after.length === 0 && query.date_before.length === 0 ? 'transparent' : 'black'};
        color: ${query.date_after.length === 0 && query.date_before.length === 0 ? 'black' : 'white'};
      }
      
      button[name=dateRange] div {
        display: flex;
        flex-flow: column wrap;
        padding: 0;
      }


    `}</style>
  </div>
}