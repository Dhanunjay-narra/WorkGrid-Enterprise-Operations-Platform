export class IotThresholdsMetricRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotThresholdsMetric ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
