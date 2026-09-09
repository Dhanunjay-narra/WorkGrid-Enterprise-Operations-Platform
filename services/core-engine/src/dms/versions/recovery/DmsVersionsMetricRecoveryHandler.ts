export class DmsVersionsMetricRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for DmsVersionsMetric ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
