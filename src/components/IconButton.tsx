import { FC } from "react";
import { Button as NBButton, IButtonProps } from "native-base";
import { SvgProps } from "react-native-svg";

type Props = IButtonProps & {
  icon: FC<SvgProps>;
  type?: 'red' | 'default';
  iconType?: 'fill' | 'stroke';
}

export function IconButton({ icon: Icon, type = 'default', iconType = 'fill', ...rest }: Props) {
  return (
    <NBButton
      bg={type === "default" ? "blue.800" : 'red.900'}
      w="57"
      h="57"
      rounded="lg"
      borderWidth={1}
      borderColor="gray.800"
      _pressed={{
        backgroundColor: type === "default" ? "gray.800" : 'red.400'
      }}
      {...rest}
    >
      {iconType === 'fill' ? (
        <Icon fill={type === 'default' ? "#A0A0CC" : "white"} />
      ) : (
        <Icon stroke={type === 'default' ? "#A0A0CC" : "white"} />
      )}

    </NBButton>
  );
}