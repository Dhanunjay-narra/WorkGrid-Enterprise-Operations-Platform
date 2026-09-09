export class PrjEpicStepExecutor {
  public async executeStep(stepConfig: Record<string, any>, context: Record<string, any>): Promise<{ success: boolean; output: any }> {
    console.log("[DAG-EXECUTOR] Executing PrjEpic workflow node step");
    return { success: true, output: { step: "PrjEpic", timestamp: new Date().toISOString() } };
  }
}
