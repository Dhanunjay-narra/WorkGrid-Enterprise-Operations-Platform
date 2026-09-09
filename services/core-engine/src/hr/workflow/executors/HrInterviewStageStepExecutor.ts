export class HrInterviewStageStepExecutor {
  public async executeStep(stepConfig: Record<string, any>, context: Record<string, any>): Promise<{ success: boolean; output: any }> {
    console.log("[DAG-EXECUTOR] Executing HrInterviewStage workflow node step");
    return { success: true, output: { step: "HrInterviewStage", timestamp: new Date().toISOString() } };
  }
}
