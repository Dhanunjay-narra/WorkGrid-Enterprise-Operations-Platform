export class FinRefundRecordStepExecutor {
  public async executeStep(stepConfig: Record<string, any>, context: Record<string, any>): Promise<{ success: boolean; output: any }> {
    console.log("[DAG-EXECUTOR] Executing FinRefundRecord workflow node step");
    return { success: true, output: { step: "FinRefundRecord", timestamp: new Date().toISOString() } };
  }
}
