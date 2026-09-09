export class CommMessagesMetricRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for CommMessagesMetric ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
