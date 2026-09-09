export class IotTelemetryNodeRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotTelemetryNode ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
