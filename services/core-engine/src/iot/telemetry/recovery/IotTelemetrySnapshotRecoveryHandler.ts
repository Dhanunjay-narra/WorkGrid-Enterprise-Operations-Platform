export class IotTelemetrySnapshotRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotTelemetrySnapshot ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
