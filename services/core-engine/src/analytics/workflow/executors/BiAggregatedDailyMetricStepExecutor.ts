export class BiAggregatedDailyMetricStepExecutor {
  public async executeStep(stepConfig: Record<string, any>, context: Record<string, any>): Promise<{ success: boolean; output: any }> {
    console.log("[DAG-EXECUTOR] Executing BiAggregatedDailyMetric workflow node step");
    return { success: true, output: { step: "BiAggregatedDailyMetric", timestamp: new Date().toISOString() } };
  }
}
