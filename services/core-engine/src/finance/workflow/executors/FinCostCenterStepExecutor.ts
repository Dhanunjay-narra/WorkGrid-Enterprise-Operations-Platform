export class FinCostCenterStepExecutor {
  public async executeStep(stepConfig: Record<string, any>, context: Record<string, any>): Promise<{ success: boolean; output: any }> {
    console.log("[DAG-EXECUTOR] Executing FinCostCenter workflow node step");
    return { success: true, output: { step: "FinCostCenter", timestamp: new Date().toISOString() } };
  }
}
