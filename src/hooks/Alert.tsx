import { useRef } from "react";
import { Box, Text, useToast } from "native-base";

interface IShowAlertProps {
  type: "error" | "warn" | "info" | "success";
  title?: string;
  message: string;
}

const colors = {
  error: {
    color: "red.500",
  },
  warn: {
    color: "amber.400",
  },
  info: {
    color: "info.500",
  },
  success: {
    color: "success.500",
  },
};

function useAlert() {
  const toast = useToast();
  const toastIdRef = useRef(null);

  function addToast() {
    toastIdRef.current = toast.show({
      title: "Hi, Nice to see you",
    });
  }

  function close() {
    if (toastIdRef.current) {
      toast.close(toastIdRef.current);
    }
  }

  function closeAll() {
    toast.closeAll();
  }

  function showAlert({ type, title = "", message }: IShowAlertProps) {
    if (Array.isArray(message)) {
      message.forEach(
        (item) =>
          (toastIdRef.current = toast.show({
            title,
            placement: "top",
            render: () => (
              <Box bg={colors[type].color} px={3} py={3} rounded="lg" mb={5}>
                <Text
                  fontSize={20}
                  fontWeight={700}
                  color="#fff"
                  textAlign="center"
                  lineHeight={20}
                >
                  {item}
                </Text>
              </Box>
            ),
          }))
      );

      return;
    }

    toastIdRef.current = toast.show({
      title,
      placement: "top",
      render: () => (
        <Box bg={colors[type].color} px={3} py={3} rounded="lg" mb={5}>
          <Text
            fontSize={20}
            fontWeight={700}
            color="#fff"
            textAlign="center"
            lineHeight={20}
          >
            {message}
          </Text>
        </Box>
      ),
    });
  }

  return { showAlert };
}

export { useAlert };
