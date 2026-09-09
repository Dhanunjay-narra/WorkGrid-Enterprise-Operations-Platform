export class SecIpAllowlistRuleStepExecutor {
  public async executeStep(stepConfig: Record<string, any>, context: Record<string, any>): Promise<{ success: boolean; output: any }> {
    console.log("[DAG-EXECUTOR] Executing SecIpAllowlistRule workflow node step");
    return { success: true, output: { step: "SecIpAllowlistRule", timestamp: new Date().toISOString() } };
  }
}
