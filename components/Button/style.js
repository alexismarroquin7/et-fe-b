

export const createStyle = (props) => {
  const style = {};

  if(typeof props.width === 'string') {
    style.width = props.width;
  } else {
    style.width = 'auto';
  }
  
  if(typeof props.height === 'string') {
    style.height = props.height;
  } else {
    style.height = 'auto';
  }
  
  if(typeof props.padding === 'string') {
    style.padding = props.padding;
  } else {
    style.padding = '1rem';
  }
  
  if(typeof props.border === 'string') {
    style.border = props.border;
  } else if(!props.border && props.variant === 'contained') {
    style.border = '1px solid #4285F4';
  } else if(!props.border && props.variant === 'outlined') {
    style.border = '1px solid #4285F4';
  } else if(!props.border && props.variant === 'text') {
    style.border = '0';
  } else {
    style.border = '0';
  }
  
  if(typeof props.br === 'string') {
    style.br = props.br;
  } else {
    style.br = '2rem';
  }

  if(typeof props.bc === 'string') {
    style.bc = props.bc;
  } else if(!props.bc && props.variant === 'contained') {
    style.bc = '#4285F4';
  } else if(!props.bc && props.variant === 'outlined') {
    style.bc = 'transparent';
  } else if(!props.bc && props.variant === 'text') {
    style.bc = 'transparent';
  } else {
    style.bc = 'transparent';
  }
  
  if(typeof props.color === 'string') {
    style.color = props.color;
  } else if(!props.color && props.variant === 'contained') {
    style.color = '#fff';
  } else if(!props.color && props.variant === 'outlined') {
    style.color = '#4285F4';
  } else if(!props.color && props.variant === 'text') {
    style.color = '#4285F4';
  } else {
    style.color = '#4285F4';
  }
  
  return style;
}