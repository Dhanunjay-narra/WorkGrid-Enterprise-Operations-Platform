export class EvtEventSubscriptionStepExecutor {
  public async executeStep(stepConfig: Record<string, any>, context: Record<string, any>): Promise<{ success: boolean; output: any }> {
    console.log("[DAG-EXECUTOR] Executing EvtEventSubscription workflow node step");
    return { success: true, output: { step: "EvtEventSubscription", timestamp: new Date().toISOString() } };
  }
}
