export class IotDeviceLocationStepExecutor {
  public async executeStep(stepConfig: Record<string, any>, context: Record<string, any>): Promise<{ success: boolean; output: any }> {
    console.log("[DAG-EXECUTOR] Executing IotDeviceLocation workflow node step");
    return { success: true, output: { step: "IotDeviceLocation", timestamp: new Date().toISOString() } };
  }
}
