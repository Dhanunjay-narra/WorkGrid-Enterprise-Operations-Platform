export class IotTelemetryThresholdRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotTelemetryThreshold ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
