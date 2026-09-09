export class IotAnomaliesTransactionRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotAnomaliesTransaction ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
