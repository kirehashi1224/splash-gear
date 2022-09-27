import { style } from '@vanilla-extract/css';

export const styles = {
  root: style({
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '2rem',
    textAlign: 'center',
  }),
  header: style({
    fontWeight: 'bold',
    fontSize: 24,
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
    marginLeft: 8,
  }),
};
