export class BiKpiMetricStepExecutor {
  public async executeStep(stepConfig: Record<string, any>, context: Record<string, any>): Promise<{ success: boolean; output: any }> {
    console.log("[DAG-EXECUTOR] Executing BiKpiMetric workflow node step");
    return { success: true, output: { step: "BiKpiMetric", timestamp: new Date().toISOString() } };
  }
}
