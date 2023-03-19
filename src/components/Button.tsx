import { Button as NBButton, IButtonProps, Text } from "native-base";

type Props = IButtonProps & {
  label: string;
  variant?: "solid" | "outline";
};

export function Button({ label, variant = "solid", ...rest }: Props) {
  return (
    <NBButton
      padding={5}
      bg={variant === "outline" ? "transparent" : "red.900"}
      borderWidth={0}
      borderRadius={15}
      _pressed={{
        bg: variant === "outline" ? "transparent" : "red.500",
      }}
      {...rest}
    >
      <Text
        color={variant === "outline" ? "red.900" : "white"}
        fontFamily="heading"
        fontSize={20}
        fontWeight={variant === "outline" ? "medium" : "medium"}
      >
        {label}
      </Text>
    </NBButton>
  );
}
