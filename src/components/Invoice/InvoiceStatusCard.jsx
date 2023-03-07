import { Box, Card, CardContent, Chip, Typography } from '@mui/material';

/**
 * Amount string, Invoice status card title, increase or decrease rate, total number of action, status message, isIncreased
 * should come from redux store
 */

const StatusCard = ({
  amount,
  title,
  increaseRate,
  totalStatusNumber,
  statusMessage,
  isActive,
  isIncreased,
}) => {
  // Style objects used in this component
  const cardStyle = isActive
    ? {
        minWidth: '230px',
        backgroundColor: '#438A7A',
        color: '#ffff',
      }
    : { minWidth: '230px', color: '#686868' };

  const cardTitleBoxStyle = {
    mb: 2,
    display: 'flex',
    gap: 1.5,
  };

  const cardTitleStyle = isActive
    ? { color: '#ffffffcb', fontSize: '14px' }
    : { color: '#76797e', fontSize: '14px' };

  const cardPercentageStye = isIncreased
    ? { color: 'green', fontSize: '14px' }
    : { color: 'red', fontSize: '14px' };

  const cardStatusBox = { display: 'flex', gap: 1 };

  const cardNumberStyle = isIncreased
    ? { backgroundColor: 'green', borderRadius: 1, color: '#ffff' }
    : { backgroundColor: 'red', borderRadius: 1, color: '#ffff' };

  return (
    <Card sx={cardStyle}>
      <CardContent>
        <Typography sx={{ fontSize: '22px' }}>
          ${amount >= 1000 && amount / 1000}k
        </Typography>
        <Box sx={cardTitleBoxStyle}>
          <Typography sx={cardTitleStyle}>{title}</Typography>
          <Typography sx={cardPercentageStye}>
            {increaseRate > 0 && '+'} {increaseRate && increaseRate} %
          </Typography>
        </Box>
        <Box sx={cardStatusBox}>
          <Chip size='small' label={totalStatusNumber} sx={cardNumberStyle} />
          <Typography>{statusMessage}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default StatusCard;
