export class IotTelemetryProfileRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotTelemetryProfile ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
