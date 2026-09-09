export class FinExpenseReceiptStepExecutor {
  public async executeStep(stepConfig: Record<string, any>, context: Record<string, any>): Promise<{ success: boolean; output: any }> {
    console.log("[DAG-EXECUTOR] Executing FinExpenseReceipt workflow node step");
    return { success: true, output: { step: "FinExpenseReceipt", timestamp: new Date().toISOString() } };
  }
}
