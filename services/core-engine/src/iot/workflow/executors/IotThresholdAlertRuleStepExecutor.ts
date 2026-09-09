export class IotThresholdAlertRuleStepExecutor {
  public async executeStep(stepConfig: Record<string, any>, context: Record<string, any>): Promise<{ success: boolean; output: any }> {
    console.log("[DAG-EXECUTOR] Executing IotThresholdAlertRule workflow node step");
    return { success: true, output: { step: "IotThresholdAlertRule", timestamp: new Date().toISOString() } };
  }
}
