export class FinInvoiceStepExecutor {
  public async executeStep(stepConfig: Record<string, any>, context: Record<string, any>): Promise<{ success: boolean; output: any }> {
    console.log("[DAG-EXECUTOR] Executing FinInvoice workflow node step");
    return { success: true, output: { step: "FinInvoice", timestamp: new Date().toISOString() } };
  }
}
