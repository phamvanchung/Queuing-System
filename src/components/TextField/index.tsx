import InputUnstyled, { InputUnstyledProps } from "@mui/base/InputUnstyled";
import { Typography } from "@mui/material";
import * as React from "react";
import { StyledInputElement } from "./styles";

interface InputProps {
  placeholder?: string;
  title?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField = ({
  placeholder,
  title,
  name,
  value,
  onChange,
  ...props
}: InputProps) => {
  const CustomInput = React.forwardRef(function CustomInput(
    props: InputUnstyledProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) {
    return (
      <InputUnstyled
        components={{ Input: StyledInputElement }}
        {...props}
        ref={ref}
      />
    );
  });

  return (
    <>
      <Typography
        style={{
          fontFamily: "Nunito",
          fontWeight: 600,
          fontSize: "16px",
          lineHeight: "24px",
          marginBottom: "5px",
        }}
      >
        {title}
      </Typography>
      <CustomInput
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}
      />
    </>
  );
};

export default TextField;
