export class IdPermissionStepExecutor {
  public async executeStep(stepConfig: Record<string, any>, context: Record<string, any>): Promise<{ success: boolean; output: any }> {
    console.log("[DAG-EXECUTOR] Executing IdPermission workflow node step");
    return { success: true, output: { step: "IdPermission", timestamp: new Date().toISOString() } };
  }
}
