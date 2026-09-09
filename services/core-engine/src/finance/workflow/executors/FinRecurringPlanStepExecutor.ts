export class FinRecurringPlanStepExecutor {
  public async executeStep(stepConfig: Record<string, any>, context: Record<string, any>): Promise<{ success: boolean; output: any }> {
    console.log("[DAG-EXECUTOR] Executing FinRecurringPlan workflow node step");
    return { success: true, output: { step: "FinRecurringPlan", timestamp: new Date().toISOString() } };
  }
}
