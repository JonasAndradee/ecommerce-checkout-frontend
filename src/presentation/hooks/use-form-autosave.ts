import { useEffect, useCallback, useRef, useState } from "react";
import { useFormContext } from "react-hook-form";
import debounce from "lodash/debounce";
import { StorageService } from "@/application/services/storage-service";

const storageService = new StorageService();

export function useFormAutosave(formKey: string, debounceMs = 1000) {
  const { watch, reset } = useFormContext();
  const formValues = watch();
  const initialLoadDone = useRef(false);
  const shouldSave = useRef(true);
  const [valuesSaved, setValuesSaved] = useState<{
    data: any;
    timestamp: string;
  } | null>();

  const debouncedSave = useCallback(
    debounce((data: any) => {
      if (shouldSave.current) {
        storageService.save(formKey, data);
      }
    }, debounceMs),
    [formKey, debounceMs]
  );

  useEffect(() => {
    if (!initialLoadDone.current) {
      const saved = storageService.load(formKey);
      if (saved) {
        setValuesSaved(saved);
      }
      initialLoadDone.current = true;
      return;
    }

    if (shouldSave.current) {
      debouncedSave(formValues);
    }
  }, [formValues, formKey, debouncedSave, reset]);

  const clearSavedData = useCallback(() => {
    shouldSave.current = false;
    storageService.clear(formKey);
    reset(undefined);

    setTimeout(() => {
      shouldSave.current = true;
    }, 0);
  }, [formKey, reset]);

  return { clearSavedData, valuesSaved };
}
