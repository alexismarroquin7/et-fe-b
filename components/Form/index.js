import { createStyle } from "./style";


export const Form = (props) => {
  
  const style = createStyle(props);
  
  return <form {...props}>
    {props.children}
    <style jsx>{`
      form {
        display: flex;
        width: ${style.width};
        flex-flow: ${style.ff};
        align-items: ${style.ai};
        justify-content: ${style.jc};
        border: ${style.border};
        border-radius: ${style.br};
        color: ${style.color};
        background-color: ${style.bc};
        padding: ${style.padding};
        gap: ${style.gap};
        height: ${style.height};
        position: ${style.position};
        top: ${style.top};
        bottom: ${style.bottom};
        left: ${style.left};
        right: ${style.right};
        z-index: ${style.zIndex};
      }
    `}</style>  
  </form>
}