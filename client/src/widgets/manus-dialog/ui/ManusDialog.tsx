import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { Button } from "@/shared/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
} from "@/shared/ui/dialog";

interface ManusDialogProps {
  title?: string;
  logo?: string;
  open?: boolean;
  onLogin: () => void;
  onOpenChange?: (open: boolean) => void;
  onClose?: () => void;
}

export function ManusDialog({
  title,
  logo,
  open = false,
  onLogin,
  onOpenChange,
  onClose,
}: ManusDialogProps) {
  const [internalOpen, setInternalOpen] = useState(open);

  useEffect(() => {
    if (!onOpenChange) {
      setInternalOpen(open);
    }
  }, [open, onOpenChange]);

  const handleClose = () => {
    if (onOpenChange) {
      onOpenChange(false);
    } else {
      setInternalOpen(false);
    }
    onClose?.();
  };

  return (
    <Dialog
      open={onOpenChange ? open : internalOpen}
      onClose={handleClose}
      slotProps={{
        paper: {
          sx: {
          py: 0,
          bgcolor: "#f8f8f7",
          borderRadius: "20px",
          width: 400,
          boxShadow: "0px 4px 11px 0px rgba(0,0,0,0.08)",
          border: "1px solid rgba(0,0,0,0.08)",
          textAlign: "center",
          },
        },
      }}
    >
      <DialogContent sx={{ p: 0, gap: 0, textAlign: "center" }}>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1, p: 5, pt: 12 }}>
          {logo ? (
            <Box sx={{ width: 64, height: 64, bgcolor: "#fff", borderRadius: "12px", border: "1px solid rgba(0,0,0,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Box component="img" src={logo} alt="Dialog graphic" sx={{ width: 40, height: 40, borderRadius: "8px" }} />
            </Box>
          ) : null}

          {title ? (
            <DialogTitle sx={{ fontSize: 20, fontWeight: 600, color: "#34322d", lineHeight: "26px", letterSpacing: "-0.44px" }}>
              {title}
            </DialogTitle>
          ) : null}
          <Typography sx={{ fontSize: 14, color: "#858481", lineHeight: "20px", letterSpacing: "-0.154px" }}>
            Пожалуйста, войдите через Manus, чтобы продолжить
          </Typography>
        </Box>

        <DialogActions sx={{ px: 5, py: 2.5 }}>
          <Button
            onClick={onLogin}
            sx={{
              width: "100%",
              height: 40,
              bgcolor: "#1a1a19",
              "&:hover": { bgcolor: "#1a1a19", opacity: 0.9 },
              color: "#fff",
              borderRadius: "10px",
              fontSize: 14,
              fontWeight: 500,
              lineHeight: "20px",
              letterSpacing: "-0.154px",
              border: "none",
            }}
          >
            Войти через Manus
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
}
