import { SearchSharp } from '@mui/icons-material';
import { InputAdornment, OutlinedInput } from '@mui/material';

const SearchBox = ({ placeholder }) => {
  return (
    <OutlinedInput
      size='small'
      placeholder={placeholder}
      startAdornment={
        <InputAdornment position='start'>
          {/* <ButtonBase><SearchSharp /></ButtonBase> */}
          
          <SearchSharp sx={{color:'#bcbcbc'}}/>
        </InputAdornment>
      }
    />
  );
};
export default SearchBox;
