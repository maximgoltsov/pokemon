import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

interface IPageSizeProps {
  size: number;
  onSelect: (size: number) => void;
}

const PageSize = (props: IPageSizeProps) => {
  const { size, onSelect } = props;

  return (
    <FormControl>
      <InputLabel id="demo-simple-select-label">Page</InputLabel>
      <Select
        id="demo-simple-select"
        label="Per page"
        labelId="demo-simple-select-label"
        value={size}
        onChange={(event) => onSelect(+event.target.value)}
      >
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={20}>20</MenuItem>
        <MenuItem value={50}>50</MenuItem>
      </Select>
    </FormControl>
  );
};

export default PageSize;
