import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import React, { FC } from "react";
import { SYMBOLS } from "../lib/symbols";

interface Props {
  symbol: string;
  setSymbol: (symbol: string) => void;
}

const SymbolDropdown: FC<Props> = ({ symbol, setSymbol }) => {
  return (
    <>
      <Autocomplete
        id="combo-box-demo"
        options={SYMBOLS}
        style={{ width: 200 }}
        value={symbol}
        onChange={(event, newValue) => {
          setSymbol(newValue);
        }}
        renderInput={(params) => (
          <TextField {...params} label="Combo box" variant="outlined" />
        )}
      />
    </>
  );
};

export default SymbolDropdown;
