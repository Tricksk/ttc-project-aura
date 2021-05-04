import { makeStyles } from "@material-ui/core";
import { shade } from "polished";

export const useModalStyles = makeStyles({
  button: {
    backgroundColor: "var(--primary)",
    color: "var(--white)",
    marginRight: 10,

    "&:hover": {
      backgroundColor: "var(--primary-2)",
    },
  },
  buttonSelected: {
    backgroundColor: "var(--primary-3)",
  },
  buttonPrimary: {
    backgroundColor: 'var(--secundary)',
    color: 'var(--white)',

    fontFamily: 'Roboto Slab',
    textTransform: 'none',
    fontWeight: 'normal',

    padding: '8px 16px',

    '&:hover': {
      backgroundColor: shade(0.2, '#03A39C')
    },

    margin: '0px 10px'
  },
  buttonCancel: {
    backgroundColor: 'var(--gray-5)',
    color: 'var(--white)',

    fontFamily: 'Roboto Slab',
    textTransform: 'none',
    fontWeight: 'normal',

    padding: '8px 16px',

    '&:hover': {
      backgroundColor: shade(0.2, '#BEBEBE')
    }
  }
});
