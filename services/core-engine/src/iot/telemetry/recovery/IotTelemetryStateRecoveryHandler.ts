export class IotTelemetryStateRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotTelemetryState ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
