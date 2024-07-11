import React, { useState } from "react";
import { DropdownIcon, Select, SelectWrapper } from "@/atoms/select";

interface Option {
  value: number;
  label: string;
}

interface SelectProps {
  options: Option[];
  value: number;
  onChange: (value: number) => void;
}

export const SelectComponent: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setIsOpen(false);
    onChange(Number(e.target.value));
  };

  return (
    <SelectWrapper setIsOpen={setIsOpen}>
      <Select
        value={String(value)}
        handleChange={handleChange}
        handleToggle={handleToggle}
        isOpen={isOpen}
        options={options.map((option) => ({
          ...option,
          value: String(option.value),
        }))}
      />
      <DropdownIcon isOpen={isOpen} />
    </SelectWrapper>
  );
};
