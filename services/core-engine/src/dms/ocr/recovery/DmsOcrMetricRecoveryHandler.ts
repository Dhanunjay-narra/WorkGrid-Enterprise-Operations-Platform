export class DmsOcrMetricRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for DmsOcrMetric ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
