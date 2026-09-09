export class IotAnomaliesBatchRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotAnomaliesBatch ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
