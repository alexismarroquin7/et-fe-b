export const DateRangeModal = (props) => {
  const { query, setQuery } = props;
  
  const handleChange = e => {
    setQuery({...query, [e.target.name]: e.target.value});
  }

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
      <h3>Date Range</h3>
      
      <div
        className="modal_actions"
      >
        <div
          className="after"
        >
          <label>After</label>
          <input
            type="date"
            name="date_after"
            value={query.date_after}
            onChange={handleChange}
          />
        </div>
        <div
          className="before"
        >
          <label>Before</label>
          <input
            type="date"
            name="date_before"
            value={query.date_before}
            onChange={handleChange}
            min={query.date_after}
          />
        </div>
      </div>

    </div>

    <style jsx>{`
      .modal,
      .open,
      .closed {
        transition: all 2s;
      }

      .modal {
        position: fixed;
        z-index: ${props.zIndex ? props.zIndex : '1'};
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
      
      .after,
      .before {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: space-between;
      }

      .after input,
      .before input {
        padding: 1rem;
        font-size: 1rem;
        border: 1px solid #eee;
        font-family: 'Roboto', sans-serif;
      }

    `}</style>
  </div>
}