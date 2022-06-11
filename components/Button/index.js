import { createStyle } from "./style"

export const Button = (props) => {
  
  const style = createStyle(props);

  return <button
    {...props}
  >
    {props.children}
    <style jsx>{`
      button {
        width: ${style.width};
        height: ${style.height};
        padding: ${style.padding};
        border: ${style.border};
        border-radius: ${style.br};
        background-color: ${style.bc};
        color: ${style.color};
      }
    `}</style>  
  </button>
}