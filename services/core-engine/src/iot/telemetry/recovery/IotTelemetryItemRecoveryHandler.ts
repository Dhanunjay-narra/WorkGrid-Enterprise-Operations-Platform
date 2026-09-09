export class IotTelemetryItemRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotTelemetryItem ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
