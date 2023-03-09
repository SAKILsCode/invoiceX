import { Delete, Edit, Person, Visibility } from '@mui/icons-material';
import { Box, Button, Checkbox, Chip, Menu, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useState } from 'react';

// TODO: rows data should be replaced by external source
import { headerColumns, rows } from './constantData';
import { actionButtonIconStyle, actionButtonStyle, boldFont, chipStyle, clientBoxStyle, defaultColor, paperStyle } from './styles';

const InvoiceTable = () => {

  // Button
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

  const tableHeadColumns = headerColumns.map((column) => (
    <TableCell key={column.id} sx={boldFont}>
      {column.label}
    </TableCell>
  ))

  const tableBodyContent = rows.map((row) => {
    return (
      <TableRow hover tabIndex={-1} key={row.id}>
        <TableCell>
          <Checkbox sx={defaultColor} />
        </TableCell>
        <TableCell sx={boldFont}>{row.id}</TableCell>
        <TableCell>
          <Box sx={clientBoxStyle}>
            <Person /> {row.client.name}
          </Box>
        </TableCell>
        <TableCell>{row.email}</TableCell>
        <TableCell>{row.date}</TableCell>
        <TableCell>{row.billed}</TableCell>
        <TableCell>
          <Chip label={row.status} sx={chipStyle(row)} />
        </TableCell>
        <TableCell>
          <Button
            aria-controls='dropdown-menu'
            aria-haspopup='true'
            onClick={handleActionClick}
            sx={actionButtonStyle}
          >
            {row.action}
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
      </TableRow>
    );
  })

  return (
    <Paper sx={paperStyle}>
      <TableContainer>
        <Table stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
              {/* Header checkbox cell */}
              <TableCell>
                <Checkbox sx={defaultColor} />
              </TableCell>

              {/* Mapping from header column */}
              {tableHeadColumns}
            </TableRow>
          </TableHead>

          <TableBody>
            {tableBodyContent}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default InvoiceTable;
