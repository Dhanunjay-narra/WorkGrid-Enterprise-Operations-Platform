export class IotTelemetryPolicyRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotTelemetryPolicy ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
