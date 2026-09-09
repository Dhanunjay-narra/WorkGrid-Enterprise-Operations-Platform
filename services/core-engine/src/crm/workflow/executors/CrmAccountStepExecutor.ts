export class CrmAccountStepExecutor {
  public async executeStep(stepConfig: Record<string, any>, context: Record<string, any>): Promise<{ success: boolean; output: any }> {
    console.log("[DAG-EXECUTOR] Executing CrmAccount workflow node step");
    return { success: true, output: { step: "CrmAccount", timestamp: new Date().toISOString() } };
  }
}
