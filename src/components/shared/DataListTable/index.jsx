import { Delete, Edit, Visibility } from '@mui/icons-material';
import {
  Button,
  Chip,
  Menu,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { useState } from 'react';

import {
  actionButtonIconStyle,
  actionButtonStyle,
  boldFont,
  chipStyle,
  paperStyle,
} from './styles';

const TestTable = ({ columns, rows }) => {
  const [anchorFlag, setAnchorFlag] = useState(null);

  const handleActionClick = (event) => {
    setAnchorFlag(event.currentTarget);
  };

  const handleActionClose = () => {
    setAnchorFlag(null);
  };

  const handleActionView = () => {
    // TODO
  };

  const handleActionEdit = () => {
    // TODO
  };

  const handleActionDelete = () => {
    // TODO
  };

  const tableHeadColumns = columns.map((column) => (
    <TableCell key={column.key} sx={boldFont}>
      {column.label}
    </TableCell>
  ));

  const tableBodyContent = rows.map((row) => {
    return (
      <TableRow hover tabIndex={-1} key={row.id}>
        {columns.map((columnObj) => {
          const rowProperty = row[columnObj.key];

          if (typeof rowProperty !== 'object') {
            return <TableCell key={columnObj.key}>{rowProperty}</TableCell>;
          }

          if (rowProperty.type === 'chip') {
            return (
              <TableCell key={columnObj.key}>
                <Chip
                  label={rowProperty.text}
                  sx={chipStyle(rowProperty.text)}
                />
              </TableCell>
            );
          }

          if (rowProperty.type === 'button') {
            return (
              <TableCell key={columnObj.key}>
                <Button
                  aria-controls='dropdown-menu'
                  aria-haspopup='true'
                  onClick={handleActionClick}
                  sx={actionButtonStyle}
                >
                  {rowProperty.text}
                </Button>
                <Menu
                  id='dropdown-menu'
                  anchorEl={anchorFlag}
                  keepMounted
                  open={Boolean(anchorFlag)}
                  onClose={handleActionClose}
                  sx={{ textAlign: 'center' }}
                >
                  <MenuItem
                    sx={{ width: '7rem' }}
                    variant='outlined'
                    size='small'
                    onClick={handleActionView}
                  >
                    <Visibility sx={actionButtonIconStyle} /> View
                  </MenuItem>
                  <MenuItem
                    sx={{ width: '7rem' }}
                    variant='outlined'
                    size='small'
                    onClick={handleActionEdit}
                  >
                    <Edit sx={actionButtonIconStyle} /> Edit
                  </MenuItem>
                  <MenuItem
                    sx={{ width: '7rem' }}
                    variant='outlined'
                    size='small'
                    onClick={handleActionDelete}
                  >
                    <Delete sx={actionButtonIconStyle} /> Delete
                  </MenuItem>
                </Menu>
              </TableCell>
            );
          }
        })}
      </TableRow>
    );
  });

  return (
    <Paper sx={paperStyle}>
      <TableContainer>
        {/* TODO: conditionally filter tab for product */}
        <Table stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
              {/* Mapping from header columns */}
              {tableHeadColumns}
            </TableRow>
          </TableHead>

          <TableBody>
            {/* Mapping from table rows */}
            {tableBodyContent}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default TestTable;
