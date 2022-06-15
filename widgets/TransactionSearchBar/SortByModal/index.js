import CheckIcon from '@mui/icons-material/Check';

export const SortByModal = (props) => {
  const { query, setQuery } = props;
  return <div 
    className={`modal ${props.open ? 'open' : 'closed'}`}
    onClick={() => {
      typeof props.onClose === 'function' && props.onClose();
    }}
  >
    <div
      className="modal_content"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <h3>Sort By</h3>
      
      <div
        className="modal_actions"
      >
        <button
          className={`${query.sortBy === 'date' ? 'contained' : 'outlined' }`}
          onClick={() => {
            setQuery({
              ...query,
              sortBy: 'date'
            })
          }}
          >
            Date
            <CheckIcon
              sx={{
                opacity: query.sortBy === 'date' ? '1' : '0'
              }}
            />
          </button>
        <button
          className={`${query.sortBy === 'name' ? 'contained' : 'outlined' }`}
          onClick={() => {
            setQuery({
              ...query,
              sortBy: 'name'
            })
          }}
        >
          Name
          <CheckIcon
            sx={{
              opacity: query.sortBy === 'name' ? '1' : '0'
            }}
          />
        </button>
      </div>
    
    </div>

    <style jsx>{`

      .modal,
      .open,
      .closed {
        transition: all .2s;
      }

      .modal {
        position: fixed;
        z-index: ${props.zIndex ? props.zIndex : '2'};
        left: ${props.left ? props.left : '0' };
        top: ${props.top ? props.top  : '0'};
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgb(0,0,0);
        background-color: rgba(0,0,0,0.4);
      }
      
      .open {
        display: block;
      }
      
      .closed {
        display: none;
      }
      
      .modal_content {
        width: 100%;
        position: fixed;
        display: flex;
        flex-flow: column wrap;
        justify-content: space-between;
        bottom: 0;
        top: 60%;
        background-color: #eee;
        padding: 1rem;
        padding-bottom: 2rem;
        border-top: 1px solid #ccc;
      }
      
      .modal_actions {
        display: flex;
        flex-flow: column wrap;
        gap: 1rem;
      }

      button {
        font-size: 1rem;
        padding: 1rem;
        border-radius: 2rem;
        border: 1px solid #ccc;
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: space-between;
        font-weight: bold;

      }
      
      button.contained {
        border: 1px solid black;
        background-color: black;
        color: #fff;
      }
      
      button.outlined {
        font-size: 1rem;
        padding: 1rem;
        border-radius: 2rem;
        border: 1px solid #ccc;
      }


    `}</style>
  </div>
}