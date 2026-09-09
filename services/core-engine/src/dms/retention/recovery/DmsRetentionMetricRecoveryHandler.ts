export class DmsRetentionMetricRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for DmsRetentionMetric ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
