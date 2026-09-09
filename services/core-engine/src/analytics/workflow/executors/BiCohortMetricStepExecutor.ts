export class BiCohortMetricStepExecutor {
  public async executeStep(stepConfig: Record<string, any>, context: Record<string, any>): Promise<{ success: boolean; output: any }> {
    console.log("[DAG-EXECUTOR] Executing BiCohortMetric workflow node step");
    return { success: true, output: { step: "BiCohortMetric", timestamp: new Date().toISOString() } };
  }
}
