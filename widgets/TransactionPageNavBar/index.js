import { AccountCircle } from "@mui/icons-material";
import { Menu, MenuItem } from "@mui/material";
import { useState } from "react";

const initialAnchorEl = null;

export const TransactionPageNavBar = (props) => {
  const [ anchorEl, setAnchorEl ] = useState(initialAnchorEl);
  
  const open = Boolean(anchorEl);
  
  const handleClose = () => setAnchorEl(initialAnchorEl);

  return <div
    className="transaction_page_nav_bar"
  >
    <div
      className="transaction_page_nav_bar_wrapper"
    >
      <AccountCircle
        sx={{transform: "scale(2)"}}
        onClick={(e) => {
          setAnchorEl(e.currentTarget);
        }}
      />

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => {
            dispatch(logout());
            handleClose();
          }}
        >Logout</MenuItem>
      </Menu>

      <button
        border="1px solid #ddd"
        padding=".5rem 1rem"
        br="50px"
        bc="#4285F4"
        color="white"
        onClick={() => navigate(`/new/transaction`)}
        className="new_transaction_button"
      >New</button>
    
    </div>

    
    <div 
      className="border_bottom"
    ></div>

    <style jsx>{`
      .transaction_page_nav_bar {
        width: 100%;
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        padding: 1rem 0 0 0;
        gap: 1rem;
      }
      
      .transaction_page_nav_bar_wrapper {
        width: 90%;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: center;
      }
      
      .border_bottom {
        width: 100%;
        background-color: #eee;
        padding: 1px;
      }

      .new_transaction_button {
        font-size: 1rem;
        padding: .5rem 1rem;
        border-radius: 2rem;
        color: #fff;
        background-color: #4285F4;  
        border: 0;
      }

    `}</style>
  
  </div>
}