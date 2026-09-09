export class HrPerformanceReviewStepExecutor {
  public async executeStep(stepConfig: Record<string, any>, context: Record<string, any>): Promise<{ success: boolean; output: any }> {
    console.log("[DAG-EXECUTOR] Executing HrPerformanceReview workflow node step");
    return { success: true, output: { step: "HrPerformanceReview", timestamp: new Date().toISOString() } };
  }
}
