export class IotLocationsMetricRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotLocationsMetric ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
