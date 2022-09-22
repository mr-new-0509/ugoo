import {
  Button,
  styled,
  LinearProgress,
  linearProgressClasses,
  TextField,
  Dialog
} from '@mui/material';
import { grey } from '@mui/material/colors';
import { COLOR_BLACK, COLOR_PRIMARY, COLOR_WHITE, FONT_FAMILY_SECONDARY } from "../utils/constants";

export const PrimaryButton = styled(Button)`
  font-family: ${FONT_FAMILY_SECONDARY};
  background-color: ${COLOR_PRIMARY};
  color: ${COLOR_BLACK};
  text-transform: none;
  border-radius: 9999px;
  :hover {
    background-color: ${COLOR_PRIMARY};
  }
`;

export const OutlineButton = styled(Button)`
  text-transform: none;
  font-family: ${FONT_FAMILY_SECONDARY};
  background-color: #1d1d2d;
  border-radius: 9999px;
  :hover {
    background-color: #1d1d2d;
  }
`;

export const PrimaryLinearProgressbar = styled(LinearProgress)({
  height: 20,
  borderRadius: 10,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: '#323252',
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 10,
    // background: 'linear-gradient(#ff6000, #ff1f01)',
    backgroundColor: COLOR_PRIMARY
  },
});

export const ExchangeTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'black',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'none',
  },
  '& .MuiOutlinedInput-root': {
    backgroundColor: COLOR_WHITE,
    fontFamily: FONT_FAMILY_SECONDARY,
    fontWeight: 900,
    border: 'none',
    borderRadius: 5,
    '& fieldset': {
    },
    '&:hover fieldset': {
      borderColor: 'rgba(0, 0, 0, 0)',
    },
    '&.Mui-focused fieldset': {
      border: 'none',
    },
    '&.Mui-disabled fieldset': {
      border: 'none',
    },
  },
  '& .MuiOutlinedInput-input': {
    fontSize: 20,
    padding: 5
  },
  '& .MuiOutlinedInput-input::placeholder': {
    fontWeight: 900
  },
  '& .MuiFormHelperText-root': {
    margin: '10px 0px'
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgba(0, 0, 0, 0)'
  }
});

export const CustomDialog = styled(Dialog)({
  '& .MuiPaper-root': {
    borderRadius: 10,
  }
});