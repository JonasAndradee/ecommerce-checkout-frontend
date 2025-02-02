import { useEffect, useState } from "react";
import { Save } from "lucide-react";

interface AutosaveIndicatorProps {
  saving?: boolean;
}

export function AutosaveIndicator({ saving }: AutosaveIndicatorProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (saving) {
      setVisible(true);
    } else {
      const timer = setTimeout(() => setVisible(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [saving]);

  if (!visible) return null;

  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      <Save className="h-4 w-4" />
      <span>{saving ? "Saving..." : "Saved"}</span>
    </div>
  );
}
