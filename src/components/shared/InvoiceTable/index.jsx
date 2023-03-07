import { Delete, Edit, Person, Visibility } from '@mui/icons-material';

import {
  Button,
  Checkbox,
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
import { Box } from '@mui/system';

import React, { useState } from 'react';

const headerColumn = [
  { id: 'invoice_id', label: 'INVOICE ID' },
  { id: 'client_id', label: 'CLIENT' },
  { id: 'email_id', label: 'Email' },
  { id: 'date_id', label: 'DATE' },
  { id: 'billed_id', label: 'BILLED', format: (value) => value.toFixed(2) },
  { id: 'status_id', label: 'STATUS' },
  { id: 'action_id', label: 'ACTION' },
];

const rows = [
  {
    id: 1,
    client: { img: '', name: 'Client A' },
    email: 'a@gmail.com',
    date: '11-11-1111',
    billed: 1200,
    status: 'Paid',
    action: '...',
  },
  {
    id: 2,
    client: { img: '', name: 'Client B' },
    email: 'a@gmail.com',
    date: '11-11-1111',
    billed: 1300,
    status: 'Unpaid',
    action: '...',
  },
  {
    id: 3,
    client: { img: '', name: 'Client C' },
    email: 'a@gmail.com',
    date: '11-11-1111',
    billed: 1400,
    status: 'Refund',
    action: '...',
  },
  {
    id: 4,
    client: { img: '', name: 'Client D' },
    email: 'a@gmail.com',
    date: '11-11-1111',
    billed: 1400,
    status: 'Cancel',
    action: '...',
  },
  {
    id: 5,
    client: { img: '', name: 'Client E' },
    email: 'a@gmail.com',
    date: '11-11-1111',
    billed: 1400,
    status: 'Paid',
    action: '...',
  },
];

const InvoiceTable = () => {
  const handleChangePage = (event) => {
    // TODO
  };

  const handleChangeRowsPerPage = (event) => {
    // TODO
  };

  // Button
  const [anchorFlag, setAnchorFlag] = useState(null);

  const handleActionClick = (event) => {
    setAnchorFlag(event.currentTarget);
  };

  const handleActionClose = () => {
    setAnchorFlag(null);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
              {/* Header checkbox cell */}
              <TableCell>
                <Checkbox sx={{ color: '#479A7A' }} />
              </TableCell>

              {/* Mapping from header column */}
              {headerColumn.map((column) => (
                <TableCell key={column.id} sx={{ fontWeight: 600 }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row) => {
              return (
                <TableRow hover tabIndex={-1} key={row.id}>
                  <TableCell>
                    <Checkbox sx={{ color: '#479A7A' }} />
                  </TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>{row.id}</TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', height: '1rem', gap: 0.5 }}>
                      <Person /> {row.client.name}
                    </Box>
                  </TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.billed}</TableCell>
                  <TableCell>
                    <Chip
                      label={row.status}
                      sx={
                        row.status.toLowerCase() === 'paid'
                          ? {
                              minWidth: '4rem',
                              borderRadius: 1,
                              backgroundColor: '#EBE4EE',
                              color: '#934fb0',
                            }
                          : row.status.toLowerCase() === 'unpaid'
                          ? {
                              borderRadius: 1,
                              backgroundColor: '#FFF8EC',
                              color: '#febd49',
                            }
                          : row.status.toLowerCase() === 'refund'
                          ? {
                              borderRadius: 1,
                              backgroundColor: '#E4EEF5',
                              color: '#50b0f3',
                            }
                          : row.status.toLowerCase() === 'cancel'
                          ? {
                              borderRadius: 1,
                              backgroundColor: '##F4E3E3',
                              color: '#ed4343',
                            }
                          : { borderRadius: 1 }
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <Button
                      aria-controls='dropdown-menu'
                      aria-haspopup='true'
                      onClick={handleActionClick}
                      sx={{
                        backgroundColor: '#477bf91a',
                        '&:hover': {
                          backgroundColor: '#406fe0',
                          color: '#ffffff',
                        },
                      }}
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
                      >
                        <Visibility sx={{ mr: 1, fontSize: '20px' }} /> View
                      </MenuItem>
                      <MenuItem
                        sx={{ width: '7rem' }}
                        variant='outlined'
                        size='small'
                      >
                        <Edit sx={{ mr: 1, fontSize: '20px' }} /> Edit
                      </MenuItem>
                      <MenuItem
                        sx={{ width: '7rem' }}
                        variant='outlined'
                        size='small'
                      >
                        <Delete sx={{ mr: 1, fontSize: '20px' }} /> Delete
                      </MenuItem>
                    </Menu>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default InvoiceTable;
