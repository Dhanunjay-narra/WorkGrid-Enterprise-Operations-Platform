export class FinVendorBillStepExecutor {
  public async executeStep(stepConfig: Record<string, any>, context: Record<string, any>): Promise<{ success: boolean; output: any }> {
    console.log("[DAG-EXECUTOR] Executing FinVendorBill workflow node step");
    return { success: true, output: { step: "FinVendorBill", timestamp: new Date().toISOString() } };
  }
}
