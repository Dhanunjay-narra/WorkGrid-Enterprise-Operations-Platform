export class BiTimeSeriesProjectionStepExecutor {
  public async executeStep(stepConfig: Record<string, any>, context: Record<string, any>): Promise<{ success: boolean; output: any }> {
    console.log("[DAG-EXECUTOR] Executing BiTimeSeriesProjection workflow node step");
    return { success: true, output: { step: "BiTimeSeriesProjection", timestamp: new Date().toISOString() } };
  }
}
