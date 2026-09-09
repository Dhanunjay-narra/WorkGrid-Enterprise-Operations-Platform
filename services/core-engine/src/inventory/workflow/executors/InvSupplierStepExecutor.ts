export class InvSupplierStepExecutor {
  public async executeStep(stepConfig: Record<string, any>, context: Record<string, any>): Promise<{ success: boolean; output: any }> {
    console.log("[DAG-EXECUTOR] Executing InvSupplier workflow node step");
    return { success: true, output: { step: "InvSupplier", timestamp: new Date().toISOString() } };
  }
}
