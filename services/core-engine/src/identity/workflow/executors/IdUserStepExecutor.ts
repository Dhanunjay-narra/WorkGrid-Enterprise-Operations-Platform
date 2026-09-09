export class IdUserStepExecutor {
  public async executeStep(stepConfig: Record<string, any>, context: Record<string, any>): Promise<{ success: boolean; output: any }> {
    console.log("[DAG-EXECUTOR] Executing IdUser workflow node step");
    return { success: true, output: { step: "IdUser", timestamp: new Date().toISOString() } };
  }
}
