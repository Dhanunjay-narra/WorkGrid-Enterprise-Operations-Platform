export class PrjBudgetLineStepExecutor {
  public async executeStep(stepConfig: Record<string, any>, context: Record<string, any>): Promise<{ success: boolean; output: any }> {
    console.log("[DAG-EXECUTOR] Executing PrjBudgetLine workflow node step");
    return { success: true, output: { step: "PrjBudgetLine", timestamp: new Date().toISOString() } };
  }
}
