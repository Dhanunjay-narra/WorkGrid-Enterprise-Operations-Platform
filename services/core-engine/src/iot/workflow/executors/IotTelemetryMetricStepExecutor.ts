export class IotTelemetryMetricStepExecutor {
  public async executeStep(stepConfig: Record<string, any>, context: Record<string, any>): Promise<{ success: boolean; output: any }> {
    console.log("[DAG-EXECUTOR] Executing IotTelemetryMetric workflow node step");
    return { success: true, output: { step: "IotTelemetryMetric", timestamp: new Date().toISOString() } };
  }
}
