export const createStyle = (props = {}) => {
  const style = {};

  if(typeof props.width === 'string'){
    style.width = props.width;
  } else {
    style.width = 'auto';
  }
  
  if(typeof props.br === 'string'){
    style.br = props.br;
  } else {
    style.br = '0';
  }
  

  if(props.ff === 'row'){
    style.ff = 'row wrap';
  } else if (props.ff === 'col') {
    style.ff = 'column wrap';
  } else if (typeof props.ff === 'string'){
    style.ff = props.ff;
  } else {
    style.ff = 'row wrap';
  }
  
  if(typeof props.ai === 'string'){
    style.ai = props.ai;
  } else {
    style.ai = 'flex-start';
  }

  if(typeof props.jc === 'string'){
    style.jc = props.jc;
  
  } else {
    style.jc = 'flex-start';
  }
  
  if(typeof props.border === 'string'){
    style.border = props.border;
  } else {
    style.border = '0';
  }
  
  if(typeof props.color === 'string'){
    style.color = props.color;
  
  } else {
    style.color = 'black';
  }
  
  if(typeof props.bc === 'string'){
    style.bc = props.bc;
  } else {
    style.bc = 'auto';
  }


  if(typeof props.padding === 'string'){
    style.padding = props.padding;
  } else {
    style.padding = '0';
  }
  

  if(typeof props.gap === 'string'){
    style.gap = props.gap;
  } else {
    style.gap = '0';
  }
  
  if(typeof props.height === 'string'){
    style.height = props.height;
  
  } else {
    style.height = 'auto';
  }
  

  if(typeof props.position === 'string'){
    style.position = props.position;
  
  } else {
    style.position = 'auto';
  }
  
  if(typeof props.top === 'string'){
    style.top = props.top;
  } else {
    style.top = 'auto';
  }
  

  if(typeof props.bottom === 'string'){
    style.bottom = props.bottom;
  } else {
    style.bottom = 'auto';
  }
  

  if(typeof props.left === 'string'){
    style.left = props.left;
  } else {
    style.left = 'auto';
  }
  

  if(typeof props.right === 'string'){
    style.right = props.right;
  } else {
    style.right = 'auto';
  }
  

  if(typeof props.zIndex === 'string'){
    style.zIndex = props.zIndex;
  } else {
    style.zIndex = '0';
  }

  return style;
}