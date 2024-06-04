import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: "#f59692",
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
    root: {
      "& .MuiPaper-root": {
        // borderRadius: "20px",
        // border: 'thin solid black',
        boxShadow: 'none',
        padding: 20
      },
      '& .MuiAppBar': {
        backgroundColor: '#fbd4d7'
      },
      '& .MuiTextField-root': {
        backgroundColor: 'white',
        // border: '1px solid black',
        // borderRadius: '15px'
      }
    }
  }));