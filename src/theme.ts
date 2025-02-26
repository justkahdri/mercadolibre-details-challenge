import {extendTheme, theme} from "@chakra-ui/react";
import {isFirefox} from "react-device-detect";

export default extendTheme({
  styles: {
    global: {
      body: {
        color: isFirefox ? "blackAlpha.800" : "blackAlpha.900",
      },
    },
  },
  colors: {
    primary: {
      50: "#FFF9BD",
      100: "#FFF693",
      200: "#FFF693",
      300: "#FFF583",
      400: "#FFF372",
      500: "#fff159",
      600: "#E6D950",
      700: "#CCC147",
      800: "#BFB543",
      900: "#BFB543",
    },
    secondary: {
      ...theme.colors.messenger,
      100: theme.colors.messenger[50],
      50: `rgba(65,137,230,.15)`,
    },
    success: theme.colors.whatsapp,
    error: theme.colors.red,
    warning: theme.colors.orange,
  },
  sizes: {
    container: {
      xl: "1200px",
    },
  },
  fonts: {
    body: "Proxima Nova",
    heading: "Proxima Nova",
  },
  components: {
    Link: {
      variants: {
        unstyled: ({colorScheme = "blackAlpha"}) => ({
          color: `${colorScheme}.800`,
          _hover: {
            color: `${colorScheme}.900`,
            textDecoration: "none",
          },
        }),
        hover_color: ({colorScheme = "secondary"}) => ({
          color: `blackAlpha.800`,
          _hover: {
            color: `${colorScheme}.700`,
            textDecoration: "none",
          },
        }),
        color: ({colorScheme = "secondary"}) => ({
          color: `${colorScheme}.500`,
          _hover: {
            color: `${colorScheme}.600`,
            textDecoration: "none",
          },
        }),
      },
      defaultProps: {
        variant: "color",
      },
    },
    Button: {
      baseStyle: {
        fontWeight: 500,
      },
      sizes: {
        lg: {
          fontSize: "md",
        },
      },
      variants: {
        ghost: ({colorScheme = "secondary"}) => ({
          backgroundColor: `${colorScheme}.50`,
          ":hover, :focus": {
            backgroundColor: `${colorScheme}.100`,
          },
        }),
        minimal: ({colorScheme = "blue"}) => ({
          outlineStyle: isFirefox ? "solid" : "auto",
          outlineColor: `${colorScheme}.500`,
          ":focus": {
            boxShadow: "none",
          },
        }),
      },
    },
    Input: {
      parts: ["field"],
      defaultProps: {
        focusBorderColor: "secondary.500",
      },
      variants: {
        filled: {
          field: {
            borderRadius: "sm",
            color: "blackAlpha.800",
            backgroundColor: "white",
            ":hover, :focus": {
              backgroundColor: "white",
            },
          },
        },
        outline: {
          field: {
            borderColor: "gray.300",
          },
        },
      },
    },
    Heading: {
      baseStyle: {
        fontWeight: 500,
      },
      variants: {
        thin_gray: {
          color: "blackAlpha.800",
          fontWeight: 400,
          fontSize: "3xl",
        },
      },
    },
  },
});
