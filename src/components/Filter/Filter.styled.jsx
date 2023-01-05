import styled from 'styled-components';
export const WrapperFiler = styled.div`
  font-size: 20px;
  margin: 20px 0;
`;
export const FilterInput = styled.input`
  height: 30px;
  width: 230px;
  padding: 0 10px;
  font-size: 20px;
  border: 1px solid #000000;
  border-radius: 7px;
  :focus {
    outline: none;
    box-shadow: rgba(129, 177, 219, 0.48) 6px 2px 16px 0px,
      rgba(245, 218, 218, 0.8) -6px -2px 16px 0px;
  }
  transition: box-shadow cubic-bezier(0.17, 0.67, 0.86, 0.57) 300ms;
`;
export const FilterP = styled.p`
  font-weight: 500;
  margin-bottom: 20px;
`;
