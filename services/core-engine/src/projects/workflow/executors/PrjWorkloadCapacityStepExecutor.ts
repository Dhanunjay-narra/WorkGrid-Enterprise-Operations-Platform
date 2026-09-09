export class PrjWorkloadCapacityStepExecutor {
  public async executeStep(stepConfig: Record<string, any>, context: Record<string, any>): Promise<{ success: boolean; output: any }> {
    console.log("[DAG-EXECUTOR] Executing PrjWorkloadCapacity workflow node step");
    return { success: true, output: { step: "PrjWorkloadCapacity", timestamp: new Date().toISOString() } };
  }
}
