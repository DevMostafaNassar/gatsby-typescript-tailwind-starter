import "./src/styles/global.css";

const HtmlAttributes = {
  lang: "en",
};

export const onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes(HtmlAttributes);
};
