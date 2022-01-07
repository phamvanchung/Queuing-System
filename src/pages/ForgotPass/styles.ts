import { makeStyles } from '@mui/styles';
import imgBackground from "../../assets/images/Bg2.svg";
import { COLORS } from '../../assets/styles';

export const useStyles = makeStyles({
  title: {
    fontFamily: 'Nunito !important',
    fontSize: "16px !important",
    color: COLORS.COLOR_TEXT,
    margin: '8px 0 !important',
    lineHeight: '27px'
  },

  logo: {
    marginBottom: '60px'
  },

  wrapperForm: {
    margin: '15px 0',
    textAlign: 'center'
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
  }

});
