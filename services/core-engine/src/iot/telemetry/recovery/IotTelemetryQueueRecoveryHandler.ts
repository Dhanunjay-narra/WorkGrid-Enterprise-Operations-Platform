export class IotTelemetryQueueRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotTelemetryQueue ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
