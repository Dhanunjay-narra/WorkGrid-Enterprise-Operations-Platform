export class CrmActivityStepExecutor {
  public async executeStep(stepConfig: Record<string, any>, context: Record<string, any>): Promise<{ success: boolean; output: any }> {
    console.log("[DAG-EXECUTOR] Executing CrmActivity workflow node step");
    return { success: true, output: { step: "CrmActivity", timestamp: new Date().toISOString() } };
  }
}
