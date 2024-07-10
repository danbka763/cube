import React, { useState } from "react";
import { DropdownIcon, Select, SelectWrapper } from "@/atoms/select";

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
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
    onChange(e.target.value);
  };

  return (
    <SelectWrapper setIsOpen={setIsOpen}>
      <Select
        value={value}
        handleChange={handleChange}
        handleToggle={handleToggle}
        isOpen={isOpen}
        options={options}
      />
      <DropdownIcon isOpen={isOpen} />
    </SelectWrapper>
  );
};
