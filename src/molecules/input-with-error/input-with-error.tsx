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
      <Input borderColor={error ? "#FF0000" : undefined} {...anyProps} />
      {error && <Text color={"#FF0000"}>Error</Text>}
    </div>
  );
};
