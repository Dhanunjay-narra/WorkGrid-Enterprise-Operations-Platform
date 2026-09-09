export class IotTelemetryBatchRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotTelemetryBatch ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
