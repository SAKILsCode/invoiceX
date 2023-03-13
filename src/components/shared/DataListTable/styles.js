export const paperStyle = { width: '100%', overflow: 'hidden' };

export const defaultColor = { color: '#479A7A' };

export const boldFont = { fontWeight: 600 };

export const clientBoxStyle = { display: 'flex', height: '1rem', gap: 0.5 };

export const chipStyle = (text) => {
  if (text.toLowerCase() === 'paid' || text.toLowerCase() === 'active') {
    return {
      minWidth: '4rem',
      borderRadius: 1,
      backgroundColor: '#EBE4EE',
      color: '#934fb0',
    };
  }
  if (text.toLowerCase() === 'unpaid' || text.toLowerCase() === 'pending') {
    return {
      minWidth: '4rem',
      borderRadius: 1,
      backgroundColor: '#FFF8EC',
      color: '#febd49',
    };
  }
  if (text.toLowerCase() === 'refund') {
    return {
      minWidth: '4rem',
      borderRadius: 1,
      backgroundColor: '#E4EEF5',
      color: '#50b0f3',
    };
  }
  if (
    text.toLowerCase() === 'cancel' ||
    text.toLowerCase() === 'disabled' ||
    text.toLowerCase() === 'failed'
  ) {
    return {
      minWidth: '4rem',
      borderRadius: 1,
      backgroundColor: '##F4E3E3',
      color: '#ed4343',
    };
  } else {
    return { borderRadius: 1, minWidth: '4rem' };
  }
};

export const actionButtonStyle = {
  backgroundColor: '#477bf91a',
  '&:hover': {
    backgroundColor: '#406fe0',
    color: '#ffffff',
  },
};

export const actionButtonIconStyle = { mr: 1, fontSize: '20px' };
