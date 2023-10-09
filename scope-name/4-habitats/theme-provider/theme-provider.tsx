import './styles/styles.scss';

export type ThemeProviderProps = {
  children?: React.ReactNode;
  Theme: 'Almbrand' | 'Codan' | 'Privatsikring';
};

export function ThemeProvider({ children, Theme }: ThemeProviderProps) {
  return <div className={Theme}>{children}</div>;
}
