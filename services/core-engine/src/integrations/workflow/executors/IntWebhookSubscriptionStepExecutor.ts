export class IntWebhookSubscriptionStepExecutor {
  public async executeStep(stepConfig: Record<string, any>, context: Record<string, any>): Promise<{ success: boolean; output: any }> {
    console.log("[DAG-EXECUTOR] Executing IntWebhookSubscription workflow node step");
    return { success: true, output: { step: "IntWebhookSubscription", timestamp: new Date().toISOString() } };
  }
}
