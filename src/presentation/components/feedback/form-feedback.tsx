import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/presentation/components/ui/alert";
import { XCircle, CheckCircle2 } from "lucide-react";

interface FormFeedbackProps {
  title: string;
  message: string;
  type: "success" | "error";
}

export function FormFeedback({ title, message, type }: FormFeedbackProps) {
  return (
    <Alert variant={type === "error" ? "destructive" : "default"}>
      {type === "error" ? (
        <XCircle className="h-4 w-4" />
      ) : (
        <CheckCircle2 className="h-4 w-4" />
      )}
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
}
