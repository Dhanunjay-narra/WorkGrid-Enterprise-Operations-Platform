export class EvtDeadLetterEventStepExecutor {
  public async executeStep(stepConfig: Record<string, any>, context: Record<string, any>): Promise<{ success: boolean; output: any }> {
    console.log("[DAG-EXECUTOR] Executing EvtDeadLetterEvent workflow node step");
    return { success: true, output: { step: "EvtDeadLetterEvent", timestamp: new Date().toISOString() } };
  }
}
