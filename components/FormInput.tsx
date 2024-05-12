import React from "react";
import { Control, FieldValues, Path } from "react-hook-form";
import { FormControl, FormField, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
interface FormInputProps<TFieldValues extends FieldValues> {
  control: Control<TFieldValues>;
  name: Path<TFieldValues>;
  type: string;
  placeholder: string;
  label: string;
  className?: string;
}

function FormInput<TFieldValues extends FieldValues>({
  control,
  name,
  type,
  placeholder,
  label,
  className = "",
}: FormInputProps<TFieldValues>) {
  return (
    <FormField
      name={name}
      control={control}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel className="form-label">{label}</FormLabel>
          <div className={`flex flex-col w-full ${className}`}>
            <FormControl>
              <Input
                {...field}
                type={type}
                placeholder={placeholder}
                className="input-class"
              />
            </FormControl>
            <FormMessage className="text-red-500 py-1" />
          </div>
        </div>
      )}
    />
  );
}

export default FormInput;
