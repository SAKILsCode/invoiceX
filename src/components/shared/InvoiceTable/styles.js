
export const paperStyle = { width: '100%', overflow: 'hidden' };

export const defaultColor = { color: '#479A7A' };

export const boldFont = { fontWeight: 600 };

export const clientBoxStyle = { display: 'flex', height: '1rem', gap: 0.5 };

export const chipStyle = (row) =>
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
    : { borderRadius: 1 };

export const actionButtonStyle = {
  backgroundColor: '#477bf91a',
  '&:hover': {
    backgroundColor: '#406fe0',
    color: '#ffffff',
  },
};

export const actionButtonIconStyle = { mr: 1, fontSize: '20px' };
