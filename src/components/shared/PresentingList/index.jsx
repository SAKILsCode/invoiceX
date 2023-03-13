import { Box, Button, Container, Grid, Typography } from '@mui/material';
import InvoiceStatusCard from '../../Invoice/InvoiceStatusCard';
import InvoiceBreadcrumbs from '../Breadcrumbs';
import DataListTable from '../DataListTable';
import SearchBox from '../SearchBox';

import { boxStyle, buttonStyle, containerStyle } from './style';

const PresentingList = ({
  title,
  breadcrumbObj,
  addButtonTitle,
  searchPlaceholder,
  cardsArray,
  columnsArray,
  rowsArray,
  addButtonHandler,
  handleActionView,
  handleActionEdit,
  handleActionDelete,
}) => {
  return (
    <Container maxWidth='100%' sx={containerStyle}>
      {/* Title and Breadcrumb box */}
      <Box display={'flex'} sx={{ ...boxStyle, pt: 2.5 }}>
        <Typography variant='h5'>{title}</Typography>
        <InvoiceBreadcrumbs
          parentLink={breadcrumbObj.parentLink}
          parentTitle={breadcrumbObj.parentTitle}
          childTitle={breadcrumbObj.childTitle}
        />
      </Box>

      {/* Add button and Search box */}
      <Box sx={boxStyle}>
        {addButtonTitle && (
          <Button
            variant='contained'
            sx={buttonStyle}
            onClick={addButtonHandler}
          >
            {`+ ${addButtonTitle}`}{' '}
          </Button>
        )}
        {searchPlaceholder && <SearchBox placeholder={searchPlaceholder} />}
      </Box>

      {/* Conditionally Card Box */}
      {cardsArray && (
        <Box sx={boxStyle}>
          <Grid container spacing={2}>
            {cardsArray.map((card) => (
              <Grid item key={card.id} lg={3} sm={6} xs={12}>
                <InvoiceStatusCard
                  key={card.id}
                  amount={card.amount}
                  title={card.title}
                  increaseRate={card.increaseRate}
                  totalStatusNumber={card.totalStatusNumber}
                  statusMessage={card.statusMessage}
                  isActive={card.isActive ? card.isActive : false}
                  isIncreased={card.isIncreased}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}

      {/* Data list table */}
      <Box sx={boxStyle}>
        {(columnsArray ||rowsArray) && (
            <DataListTable
              rows={rowsArray}
              columns={columnsArray}
              handleActionView={handleActionView}
              handleActionEdit={handleActionEdit}
              handleActionDelete={handleActionDelete}
            />
          )}
      </Box>
    </Container>
  );
};
export default PresentingList;
