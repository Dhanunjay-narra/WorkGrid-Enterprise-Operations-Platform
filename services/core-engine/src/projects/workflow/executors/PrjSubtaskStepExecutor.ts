export class PrjSubtaskStepExecutor {
  public async executeStep(stepConfig: Record<string, any>, context: Record<string, any>): Promise<{ success: boolean; output: any }> {
    console.log("[DAG-EXECUTOR] Executing PrjSubtask workflow node step");
    return { success: true, output: { step: "PrjSubtask", timestamp: new Date().toISOString() } };
  }
}
