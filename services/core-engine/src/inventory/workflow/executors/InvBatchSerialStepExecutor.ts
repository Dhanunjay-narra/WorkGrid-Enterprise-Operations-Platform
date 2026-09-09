export class InvBatchSerialStepExecutor {
  public async executeStep(stepConfig: Record<string, any>, context: Record<string, any>): Promise<{ success: boolean; output: any }> {
    console.log("[DAG-EXECUTOR] Executing InvBatchSerial workflow node step");
    return { success: true, output: { step: "InvBatchSerial", timestamp: new Date().toISOString() } };
  }
}
