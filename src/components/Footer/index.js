import { Footer, Text } from "./style";

export default function FooterContainer({ children, ...restProps }) {
  return <Footer {...restProps}>{children}</Footer>;
}

FooterContainer.Text = function FooterText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>
};
