export class IotDeviceStepExecutor {
  public async executeStep(stepConfig: Record<string, any>, context: Record<string, any>): Promise<{ success: boolean; output: any }> {
    console.log("[DAG-EXECUTOR] Executing IotDevice workflow node step");
    return { success: true, output: { step: "IotDevice", timestamp: new Date().toISOString() } };
  }
}
