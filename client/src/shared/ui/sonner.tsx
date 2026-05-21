import { Toaster as Sonner, type ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="light"
      className="toaster group"
      style={
        {
          "--normal-bg": "#FFFFFF",
          "--normal-text": "#1C1B18",
          "--normal-border": "#D8D5CF",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
