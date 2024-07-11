import { Input } from "@/atoms/input";
import { IInputProps } from "@/atoms/input/input";
import { Text } from "@/atoms/text";

interface IPropsWithError extends IInputProps {
  error: boolean;
}

export const InputWithError: React.FC<IPropsWithError> = (props) => {
  const { error, ...anyProps } = props;

  return (
    <div>
      <Input {...anyProps} />
      {error && <Text color={"red"}>Error</Text>}
    </div>
  );
};
