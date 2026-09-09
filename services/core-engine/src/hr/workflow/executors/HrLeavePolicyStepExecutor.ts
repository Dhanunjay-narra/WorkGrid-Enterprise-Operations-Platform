export class HrLeavePolicyStepExecutor {
  public async executeStep(stepConfig: Record<string, any>, context: Record<string, any>): Promise<{ success: boolean; output: any }> {
    console.log("[DAG-EXECUTOR] Executing HrLeavePolicy workflow node step");
    return { success: true, output: { step: "HrLeavePolicy", timestamp: new Date().toISOString() } };
  }
}
