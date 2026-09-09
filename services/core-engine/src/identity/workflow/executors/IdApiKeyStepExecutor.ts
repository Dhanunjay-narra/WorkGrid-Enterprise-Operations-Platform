export class IdApiKeyStepExecutor {
  public async executeStep(stepConfig: Record<string, any>, context: Record<string, any>): Promise<{ success: boolean; output: any }> {
    console.log("[DAG-EXECUTOR] Executing IdApiKey workflow node step");
    return { success: true, output: { step: "IdApiKey", timestamp: new Date().toISOString() } };
  }
}
