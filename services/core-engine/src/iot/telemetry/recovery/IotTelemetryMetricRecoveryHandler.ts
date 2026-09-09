export class IotTelemetryMetricRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotTelemetryMetric ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
