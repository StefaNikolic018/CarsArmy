/* eslint-disable @typescript-eslint/no-empty-function */
import React, { memo, RefObject } from "react";
import { useForm } from "react-hook-form";

interface SearchProps {
  handleInput: (
    event:
      | React.MouseEvent<HTMLSpanElement>
      | React.KeyboardEvent<HTMLInputElement>
      | undefined
  ) => void;
  inputRef: React.LegacyRef<HTMLInputElement>;
  dataLength: number;
}

const Input = ({ handleInput, inputRef, dataLength }: SearchProps) => {
  const {
    register,
    formState: { errors, isValid },
    setValue,
  } = useForm({
    mode: "onChange",
    delayError: 500,
  });

  return (
    <span id="searchIcon">
      <input
        {...register("input", {
          required: "Number is required!",
          valueAsNumber: true,
          value: Number(
            (inputRef as RefObject<HTMLInputElement>).current?.value
          ),
          min: {
            value: Number(dataLength),
            // Number of Cars available
            message: `Number must be ${dataLength} or greater!`,
          },
          onChange: (e) =>
            setValue("input", e.target.value, {
              shouldValidate: true,
            }),
        })}
        autoFocus
        autoComplete="off"
        placeholder="Enter number"
        type="number"
        min={dataLength}
        // Disable handleInput if input value is not valid
        onKeyDown={isValid ? handleInput : () => {}}
        ref={inputRef}
        className={errors.input ? "invalid" : ""}
      />
      {/* Error message */}
      <div className="error-msg">
        {errors.input && <span id="msg">{errors.input.message}</span>}
        {/* Making space for message if it's not showed */}
        <span style={{ visibility: "hidden" }}>s</span>
      </div>
      {/* HACK FOR MOBILE SEARCH BECAUSE OF CHROME BUG WITH onKeyDown */}
      <span
        id="iconClick"
        // Disable handleInput if input value is not valid
        onClick={isValid ? handleInput : () => {}}
      ></span>
    </span>
  );
};

export default memo(Input);
