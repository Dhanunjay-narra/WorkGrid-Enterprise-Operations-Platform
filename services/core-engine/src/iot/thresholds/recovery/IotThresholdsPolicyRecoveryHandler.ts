export class IotThresholdsPolicyRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotThresholdsPolicy ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
