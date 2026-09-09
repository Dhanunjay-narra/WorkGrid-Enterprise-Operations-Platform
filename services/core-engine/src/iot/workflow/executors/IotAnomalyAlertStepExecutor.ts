export class IotAnomalyAlertStepExecutor {
  public async executeStep(stepConfig: Record<string, any>, context: Record<string, any>): Promise<{ success: boolean; output: any }> {
    console.log("[DAG-EXECUTOR] Executing IotAnomalyAlert workflow node step");
    return { success: true, output: { step: "IotAnomalyAlert", timestamp: new Date().toISOString() } };
  }
}
