export class BiWidgetStepExecutor {
  public async executeStep(stepConfig: Record<string, any>, context: Record<string, any>): Promise<{ success: boolean; output: any }> {
    console.log("[DAG-EXECUTOR] Executing BiWidget workflow node step");
    return { success: true, output: { step: "BiWidget", timestamp: new Date().toISOString() } };
  }
}
