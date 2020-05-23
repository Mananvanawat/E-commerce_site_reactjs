import styled from 'styled-components';
export const ButtonContainer = styled.button`
color:var(--lightBlue);
text-transform: capitalize;
font-size:1.4rem;
background:transparent;
border:0.2rem solid var(--lightBlue);
border-radius:0.5rem;
padding:0.2rem 0.5rem;
cursor:pointer;
margin:0.2rem 0.5 rem 0.2rem 0;
&:hover {
  background: var(--lightBlue);
  color: var(--mainBlue);
}
&:focus {
  outline:none;
}
`