import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const RightSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;



export const Form = styled.form`
background-color: #f5f5f5;
-moz-border-radius: 8px;
-ms-border-radius: 8px;
-webkit-border-radius: 8px;
border-radius: 8px;
-moz-box-shadow: 0 1px 2px rgba(48,48,48,0.1);
-ms-box-shadow: 0 1px 2px rgba(48,48,48,0.1);
-webkit-box-shadow: 0 1px 2px rgb(48 48 48 / 10%);
box-shadow: 0 1px 2px rgb(48 48 48 / 10%);
padding: 10px;
`;

export const Input = styled.input`
background-image: none;
background-color: #fff;
border: 1px solid #ececec;
-moz-border-radius: 8px;
-ms-border-radius: 8px;
-webkit-border-radius: 8px;
border-radius: 8px;
-moz-box-shadow: 0;
-ms-box-shadow: 0;
-webkit-box-shadow: 0;
box-shadow: 0;
color: #555;
display: block;
font-size: 14px;
height: 48px;
padding: 6px 12px;
-moz-transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
-ms-transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
-webkit-transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
width: 100%;
margin: 10px 0;
`;

export const Select = styled.select`
background-image: none;
background-color: #fff;
border: 1px solid #ececec;
-moz-border-radius: 8px;
-ms-border-radius: 8px;
-webkit-border-radius: 8px;
border-radius: 8px;
-moz-box-shadow: 0;
-ms-box-shadow: 0;
-webkit-box-shadow: 0;
box-shadow: 0;
color: #555;
display: block;
font-size: 14px;
height: 48px;
padding: 6px 12px;
-moz-transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
-ms-transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
-webkit-transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
width: 100%;
margin: 10px 0;
`;

export const InputHalfLeft = styled.input`
background-image: none;
background-color: #fff;
border: 1px solid #ececec;
-moz-border-radius: 8px;
-ms-border-radius: 8px;
-webkit-border-radius: 8px;
border-radius: 8px;
-moz-box-shadow: 0;
-ms-box-shadow: 0;
-webkit-box-shadow: 0;
box-shadow: 0;
color: #555;
display: inline;
font-size: 14px;
height: 48px;
padding: 6px 12px;
margin-right: 4%;
-moz-transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
-ms-transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
-webkit-transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
width: 48%;
`;

export const InputHalfRight = styled.input`
background-image: none;
background-color: #fff;
border: 1px solid #ececec;
-moz-border-radius: 8px;
-ms-border-radius: 8px;
-webkit-border-radius: 8px;
border-radius: 8px;
-moz-box-shadow: 0;
-ms-box-shadow: 0;
-webkit-box-shadow: 0;
box-shadow: 0;
color: #555;
display: inline;
font-size: 14px;
height: 48px;
padding: 6px 12px;
-moz-transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
-ms-transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
-webkit-transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
width: 48%;
`;

export const InputSlider = styled.input`
-webkit-appearance: none;  /* Override default CSS styles */
  appearance: none;
  width: 100%; /* Full-width */
  height: 25px; /* Specified height */
  background: #d3d3d3; /* Grey background */
  outline: none; /* Remove outline */
  opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */
  -webkit-transition: .2s; /* 0.2 seconds transition on hover */
  transition: opacity .2s;
`;

export const DivSlider = styled.input`
  width: 100%;
`;