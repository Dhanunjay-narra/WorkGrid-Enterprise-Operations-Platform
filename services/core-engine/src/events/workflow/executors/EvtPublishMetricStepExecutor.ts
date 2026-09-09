export class EvtPublishMetricStepExecutor {
  public async executeStep(stepConfig: Record<string, any>, context: Record<string, any>): Promise<{ success: boolean; output: any }> {
    console.log("[DAG-EXECUTOR] Executing EvtPublishMetric workflow node step");
    return { success: true, output: { step: "EvtPublishMetric", timestamp: new Date().toISOString() } };
  }
}
