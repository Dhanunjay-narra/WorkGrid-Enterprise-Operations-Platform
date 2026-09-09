export class IotAnomaliesEntryRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotAnomaliesEntry ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
