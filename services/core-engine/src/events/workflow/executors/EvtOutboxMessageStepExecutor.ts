export class EvtOutboxMessageStepExecutor {
  public async executeStep(stepConfig: Record<string, any>, context: Record<string, any>): Promise<{ success: boolean; output: any }> {
    console.log("[DAG-EXECUTOR] Executing EvtOutboxMessage workflow node step");
    return { success: true, output: { step: "EvtOutboxMessage", timestamp: new Date().toISOString() } };
  }
}
