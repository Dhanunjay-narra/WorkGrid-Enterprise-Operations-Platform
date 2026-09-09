export class IotDeviceGroupStepExecutor {
  public async executeStep(stepConfig: Record<string, any>, context: Record<string, any>): Promise<{ success: boolean; output: any }> {
    console.log("[DAG-EXECUTOR] Executing IotDeviceGroup workflow node step");
    return { success: true, output: { step: "IotDeviceGroup", timestamp: new Date().toISOString() } };
  }
}
