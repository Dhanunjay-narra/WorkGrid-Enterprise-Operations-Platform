export class IotAnomaliesRecordRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotAnomaliesRecord ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
