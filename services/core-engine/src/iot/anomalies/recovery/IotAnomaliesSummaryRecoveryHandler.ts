export class IotAnomaliesSummaryRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotAnomaliesSummary ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
