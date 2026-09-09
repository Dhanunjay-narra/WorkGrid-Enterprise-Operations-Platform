export class CrmPipelineStepExecutor {
  public async executeStep(stepConfig: Record<string, any>, context: Record<string, any>): Promise<{ success: boolean; output: any }> {
    console.log("[DAG-EXECUTOR] Executing CrmPipeline workflow node step");
    return { success: true, output: { step: "CrmPipeline", timestamp: new Date().toISOString() } };
  }
}
