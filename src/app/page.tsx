"use client";
import { Button } from "@/atoms/button";
import { Input } from "@/atoms/input";
import { GlobalStyle } from "./global-style";
import { Text } from "@/atoms/text";
import { VersionModule } from "@/molecules/version-module";
import { useState } from "react";
import { SelectComponent } from "@/molecules/select";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [value, setValue] = useState("2");

  return (
    <div className={inter.className}>
      <GlobalStyle />
      <VersionModule />
      <Button>Вход</Button>
      <Button>Регистрация</Button>
      <Input placeholder="Login" />
      <Text>text</Text>
      <Text color="#FF0000">red text</Text>

      <SelectComponent
        options={[
          { value: "1", label: "1.00" },
          { value: "2", label: "2.00" },
          { value: "3", label: "3.00" },
          { value: "5", label: "5.00" },
          { value: "10", label: "10.00" },
          { value: "25", label: "25.00" },
          { value: "60", label: "60.00" },
          { value: "100", label: "100.00" },
        ]}
        value={value}
        onChange={setValue}
      />
    </div>
  );
}
