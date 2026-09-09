export class IotTelemetryEntryRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotTelemetryEntry ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
