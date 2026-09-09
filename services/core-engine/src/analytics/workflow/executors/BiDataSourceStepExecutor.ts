export class BiDataSourceStepExecutor {
  public async executeStep(stepConfig: Record<string, any>, context: Record<string, any>): Promise<{ success: boolean; output: any }> {
    console.log("[DAG-EXECUTOR] Executing BiDataSource workflow node step");
    return { success: true, output: { step: "BiDataSource", timestamp: new Date().toISOString() } };
  }
}
