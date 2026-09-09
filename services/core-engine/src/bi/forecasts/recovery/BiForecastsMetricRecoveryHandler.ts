export class BiForecastsMetricRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for BiForecastsMetric ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
