import { ThemeProvider as NextThemesProvider } from "next-themes";

interface Props {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: Props) => {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      storageKey="zendigitalz-theme"
    >
      {children}
    </NextThemesProvider>
  );
};

export default ThemeProvider;
