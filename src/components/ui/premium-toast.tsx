import { toast } from "sonner";

export const showPremiumToast = (message: string, type: 'success' | 'error' | 'info' = 'success') => {
  toast[type](message, {
    style: {
      background: 'hsl(var(--card))',
      border: '1px solid hsl(var(--border))',
      color: 'hsl(var(--card-foreground))',
      boxShadow: 'var(--shadow-glass)',
      backdropFilter: 'blur(20px)',
    },
    className: 'glass',
  });
};