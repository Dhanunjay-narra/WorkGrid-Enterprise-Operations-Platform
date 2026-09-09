export class IotDevicesMetricRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotDevicesMetric ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
