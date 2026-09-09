export class IntTransformationRuleStepExecutor {
  public async executeStep(stepConfig: Record<string, any>, context: Record<string, any>): Promise<{ success: boolean; output: any }> {
    console.log("[DAG-EXECUTOR] Executing IntTransformationRule workflow node step");
    return { success: true, output: { step: "IntTransformationRule", timestamp: new Date().toISOString() } };
  }
}
