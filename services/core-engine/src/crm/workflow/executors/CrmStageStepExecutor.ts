export class CrmStageStepExecutor {
  public async executeStep(stepConfig: Record<string, any>, context: Record<string, any>): Promise<{ success: boolean; output: any }> {
    console.log("[DAG-EXECUTOR] Executing CrmStage workflow node step");
    return { success: true, output: { step: "CrmStage", timestamp: new Date().toISOString() } };
  }
}
