import { useState } from "react";

export function useFinPaymentTransactionMutation() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const mutate = async (payload: Record<string, any>) => {
    setIsSubmitting(true);
    setError(null);
    try {
      console.log("[REACT-HOOK] Executing mutation for FinPaymentTransaction", payload);
      setIsSubmitting(false);
      return { success: true };
    } catch (e: any) {
      setError(e.message);
      setIsSubmitting(false);
      throw e;
    }
  };

  return { mutate, isSubmitting, error };
}
