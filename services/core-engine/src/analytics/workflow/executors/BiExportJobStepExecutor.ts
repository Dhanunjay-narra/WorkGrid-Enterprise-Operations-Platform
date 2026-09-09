export class BiExportJobStepExecutor {
  public async executeStep(stepConfig: Record<string, any>, context: Record<string, any>): Promise<{ success: boolean; output: any }> {
    console.log("[DAG-EXECUTOR] Executing BiExportJob workflow node step");
    return { success: true, output: { step: "BiExportJob", timestamp: new Date().toISOString() } };
  }
}
