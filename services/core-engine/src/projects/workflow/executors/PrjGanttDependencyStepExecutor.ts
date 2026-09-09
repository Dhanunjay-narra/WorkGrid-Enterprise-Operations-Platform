export class PrjGanttDependencyStepExecutor {
  public async executeStep(stepConfig: Record<string, any>, context: Record<string, any>): Promise<{ success: boolean; output: any }> {
    console.log("[DAG-EXECUTOR] Executing PrjGanttDependency workflow node step");
    return { success: true, output: { step: "PrjGanttDependency", timestamp: new Date().toISOString() } };
  }
}
