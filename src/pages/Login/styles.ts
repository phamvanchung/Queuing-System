import { makeStyles } from '@mui/styles';
import imgBackground from "../../assets/images/Bg1.svg";
import { COLORS } from '../../assets/styles';

export const useStyles = makeStyles({
  title: {
    fontFamily: 'Nunito',
    fontSize: "18px",
    color: COLORS.COLOR_TEXT
  },

  logo: {
    marginBottom: '60px'
  },

  wrapperForm: {
    margin: '15px 0'
  },
  form: {
    width: '80%',
  },
  input: {
    fontFamily: 'Nunito',
    fontSize: "18px",
    color: COLORS.COLOR_TEXT_INPUT,

  },
  wrapBtn: {
    display: 'flex',
    justifyContent: 'center'
  },
  img: {
    height: '600px',
    backgroundImage: `url(${imgBackground})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  wrapText: {
    height: '100%',
    display: "flex",
    justifyContent: "center",
    flexDirection: 'column',
    float: 'right',
    marginRight: '50px'
  },
  label: {
    fontFamily: 'Nunito',
    fontSize: '32px',
    lineHeight: '51px',
    color: COLORS.COLOR_TITLE,
  },
  desc: {
    fontFamily: 'Nunito',
    fontWeight: '900',
    fontSize: '36px',
    lineHeight: '54px',
    color: COLORS.COLOR_TITLE,
  }
});
