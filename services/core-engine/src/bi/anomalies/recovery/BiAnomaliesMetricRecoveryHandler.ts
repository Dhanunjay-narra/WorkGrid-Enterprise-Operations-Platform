export class BiAnomaliesMetricRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for BiAnomaliesMetric ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
