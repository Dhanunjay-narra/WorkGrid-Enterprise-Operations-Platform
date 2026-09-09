export class IotFleetMetricRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotFleetMetric ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
