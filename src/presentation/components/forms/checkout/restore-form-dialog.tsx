import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/presentation/components/ui/dialog";
import { Button } from "@/presentation/components/ui/button";

interface RestoreFormDialogProps {
  open: boolean;
  onRestore: () => void;
  onDiscard: () => void;
  savedAt: string;
}

export function RestoreFormDialog({
  open,
  onRestore,
  onDiscard,
  savedAt,
}: RestoreFormDialogProps) {
  return (
    <Dialog open={open}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Restaurar formulário salvo?</DialogTitle>
          <DialogDescription>
            Encontramos um formulário salvo anteriormente em{" "}
            {new Date(savedAt).toLocaleString()}. Você gostaria de restaurá-lo?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            variant="outline"
            className="mt-2 sm:mt-0"
            onClick={onDiscard}
          >
            Começar do zero
          </Button>
          <Button onClick={onRestore}>Restaurar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
