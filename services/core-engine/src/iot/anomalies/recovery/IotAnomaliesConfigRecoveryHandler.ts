export class IotAnomaliesConfigRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotAnomaliesConfig ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
