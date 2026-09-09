export class CrmLeadScoreStepExecutor {
  public async executeStep(stepConfig: Record<string, any>, context: Record<string, any>): Promise<{ success: boolean; output: any }> {
    console.log("[DAG-EXECUTOR] Executing CrmLeadScore workflow node step");
    return { success: true, output: { step: "CrmLeadScore", timestamp: new Date().toISOString() } };
  }
}
