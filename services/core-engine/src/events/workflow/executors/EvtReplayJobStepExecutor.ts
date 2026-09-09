export class EvtReplayJobStepExecutor {
  public async executeStep(stepConfig: Record<string, any>, context: Record<string, any>): Promise<{ success: boolean; output: any }> {
    console.log("[DAG-EXECUTOR] Executing EvtReplayJob workflow node step");
    return { success: true, output: { step: "EvtReplayJob", timestamp: new Date().toISOString() } };
  }
}
