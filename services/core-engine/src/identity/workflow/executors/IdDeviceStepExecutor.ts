export class IdDeviceStepExecutor {
  public async executeStep(stepConfig: Record<string, any>, context: Record<string, any>): Promise<{ success: boolean; output: any }> {
    console.log("[DAG-EXECUTOR] Executing IdDevice workflow node step");
    return { success: true, output: { step: "IdDevice", timestamp: new Date().toISOString() } };
  }
}
