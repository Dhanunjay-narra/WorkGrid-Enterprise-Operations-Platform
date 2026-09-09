export class SupCannedResponseStepExecutor {
  public async executeStep(stepConfig: Record<string, any>, context: Record<string, any>): Promise<{ success: boolean; output: any }> {
    console.log("[DAG-EXECUTOR] Executing SupCannedResponse workflow node step");
    return { success: true, output: { step: "SupCannedResponse", timestamp: new Date().toISOString() } };
  }
}
