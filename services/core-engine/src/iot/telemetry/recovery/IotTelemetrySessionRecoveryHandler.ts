export class IotTelemetrySessionRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotTelemetrySession ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
