export class CrmEmailSequenceStepExecutor {
  public async executeStep(stepConfig: Record<string, any>, context: Record<string, any>): Promise<{ success: boolean; output: any }> {
    console.log("[DAG-EXECUTOR] Executing CrmEmailSequence workflow node step");
    return { success: true, output: { step: "CrmEmailSequence", timestamp: new Date().toISOString() } };
  }
}
