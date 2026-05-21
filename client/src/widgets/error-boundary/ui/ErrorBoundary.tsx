import { Component, ReactNode } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { AlertTriangle, RotateCcw } from "lucide-react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            p: 4,
            bgcolor: "background.default",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              maxWidth: 672,
              p: 4,
            }}
          >
            <AlertTriangle size={48} style={{ color: "#B91C1C", marginBottom: 24, flexShrink: 0 }} />

            <Typography variant="h3" sx={{ mb: 2 }}>
              Произошла ошибка.
            </Typography>

            <Box
              sx={{
                p: 2,
                width: "100%",
                borderRadius: 1,
                bgcolor: "secondary.main",
                overflow: "auto",
                mb: 3,
              }}
            >
              <Typography
                component="pre"
                variant="body2"
                sx={{ whiteSpace: "break-spaces", color: "text.secondary" }}
              >
                {this.state.error?.stack}
              </Typography>
            </Box>

            <Button
              onClick={() => window.location.reload()}
              variant="contained"
              startIcon={<RotateCcw size={16} />}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                px: 2,
                py: 1,
                borderRadius: 2,
                "&:hover": { opacity: 0.9 },
              }}
            >
              Обновить страницу
            </Button>
          </Box>
        </Box>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
