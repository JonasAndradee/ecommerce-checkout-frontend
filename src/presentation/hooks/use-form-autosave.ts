import { useEffect, useCallback, useRef } from "react";
import { useFormContext } from "react-hook-form";
import debounce from "lodash/debounce";
import { StorageService } from "@/application/services/storage-service";

const storageService = new StorageService();

export function useFormAutosave(formKey: string, debounceMs = 1000) {
  const { watch, reset } = useFormContext();
  const formValues = watch();
  const initialLoadDone = useRef(false);

  const debouncedSave = useCallback(
    debounce((data: any) => {
      storageService.save(formKey, data);
    }, debounceMs),
    [formKey, debounceMs]
  );

  useEffect(() => {
    if (!initialLoadDone.current) {
      const saved = storageService.load(formKey);
      if (saved) {
        reset(saved.data);
      }
      initialLoadDone.current = true;
      return;
    }

    debouncedSave(formValues);
  }, [formValues, formKey, debouncedSave, reset]);

  const clearSavedData = useCallback(() => {
    storageService.clear(formKey);
  }, [formKey]);

  return { clearSavedData };
}
