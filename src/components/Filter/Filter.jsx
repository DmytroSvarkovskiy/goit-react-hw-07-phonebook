import { WrapperFiler, FilterInput, FilterP } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { filtration } from 'Redux/filterSlice';
export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <WrapperFiler>
      <FilterP>Find contacts by name</FilterP>
      <FilterInput
        type="text"
        onChange={e => dispatch(filtration(e.target.value))}
      />
    </WrapperFiler>
  );
};
