import { Box, Button, Container, Grid, Typography } from '@mui/material';
import SearchInputBox from '../../utils/SearchInputBox';
import InvoiceStatusCard from './InvoiceStatusCard';

const buttonStyle = {
  backgroundColor: '#438A7A',
  outline: '#438A7A',
  '&:hover': { backgroundColor: '#2b564b' },
};

const boxStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  pb: 2.5,
};

const Invoice = () => {
  return (
    <Container sx={{ backgroundColor: '#F5F5F5', height: '100vh' }}>
      <Box display={'flex'} sx={{ ...boxStyle, pt: 2.5 }}>
        <Typography variant='h5'>INVOICE</Typography>
        <Typography>Invoice - Invoice</Typography>{' '}
        {/* TODO: will be Breadcrumb */}
      </Box>

      <Box sx={boxStyle}>
        <Button variant='contained' sx={buttonStyle}>
          + Add Invoice
        </Button>
        <SearchInputBox placeholder='Search by name' />
      </Box>

      <Box sx={boxStyle}>
        <Grid container spacing={2}>
          <Grid item lg={3} sm={6} xs={12}>
            <InvoiceStatusCard
              amount={505550}
              title='INVOICES SENT'
              increaseRate={89.24}
              totalStatusNumber={2258}
              statusMessage='Invoices sent'
            />
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <InvoiceStatusCard
              amount={409660}
              title='PAID INVOICES'
              increaseRate={8.09}
              totalStatusNumber={1958}
              statusMessage='Paid by clients'
            />
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <InvoiceStatusCard
              amount={136980}
              title='UNPAID INVOICES'
              increaseRate={9.01 }
              totalStatusNumber={338}
              statusMessage='Unpaid by clients'
              isIncreased
            />
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <InvoiceStatusCard
              amount={8420}
              title='CANCELLED INVOICES '
              increaseRate={7.55}
              totalStatusNumber={502}
              statusMessage='Cancelled by clients'
              isActive
            />
          </Grid>
        </Grid>
      </Box>

      <Box sx={boxStyle}>{/* TODO: invoice table */}</Box>
    </Container>
  );
};
export default Invoice;
