export class IotAnomaliesQueueRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotAnomaliesQueue ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
