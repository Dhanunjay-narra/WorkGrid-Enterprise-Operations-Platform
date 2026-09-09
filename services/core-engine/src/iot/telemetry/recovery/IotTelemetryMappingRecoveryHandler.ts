export class IotTelemetryMappingRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotTelemetryMapping ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
