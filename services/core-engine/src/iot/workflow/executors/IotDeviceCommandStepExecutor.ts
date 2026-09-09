export class IotDeviceCommandStepExecutor {
  public async executeStep(stepConfig: Record<string, any>, context: Record<string, any>): Promise<{ success: boolean; output: any }> {
    console.log("[DAG-EXECUTOR] Executing IotDeviceCommand workflow node step");
    return { success: true, output: { step: "IotDeviceCommand", timestamp: new Date().toISOString() } };
  }
}
