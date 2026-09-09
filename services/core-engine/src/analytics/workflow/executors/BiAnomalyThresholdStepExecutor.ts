export class BiAnomalyThresholdStepExecutor {
  public async executeStep(stepConfig: Record<string, any>, context: Record<string, any>): Promise<{ success: boolean; output: any }> {
    console.log("[DAG-EXECUTOR] Executing BiAnomalyThreshold workflow node step");
    return { success: true, output: { step: "BiAnomalyThreshold", timestamp: new Date().toISOString() } };
  }
}
