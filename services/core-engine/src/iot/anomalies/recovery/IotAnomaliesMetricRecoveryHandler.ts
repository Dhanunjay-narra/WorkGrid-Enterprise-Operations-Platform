export class IotAnomaliesMetricRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotAnomaliesMetric ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
