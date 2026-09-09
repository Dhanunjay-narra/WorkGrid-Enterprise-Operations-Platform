export class HrLeaveRequestStepExecutor {
  public async executeStep(stepConfig: Record<string, any>, context: Record<string, any>): Promise<{ success: boolean; output: any }> {
    console.log("[DAG-EXECUTOR] Executing HrLeaveRequest workflow node step");
    return { success: true, output: { step: "HrLeaveRequest", timestamp: new Date().toISOString() } };
  }
}
