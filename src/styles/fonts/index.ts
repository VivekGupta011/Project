import localFont from "next/font/local";

const gotham = localFont({
  src: [
    {
      path: "./gotham/Gotham-XLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "./gotham/Gotham-XLightItalic.woff2",
      weight: "200",
      style: "italic",
    },
    {
      path: "./gotham/Gotham-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./gotham/Gotham-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "./gotham/Gotham-Book.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./gotham/Gotham-BookItalic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./gotham/Gotham-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./gotham/Gotham-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "./gotham/Gotham-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./gotham/Gotham-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "./gotham/Gotham-Black.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "./gotham/Gotham-BlackItalic.woff2",
      weight: "800",
      style: "italic",
    },
  ],
  variable: "--font-gotham",
});

export { gotham };
