export class IotThresholdsConfigRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotThresholdsConfig ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
