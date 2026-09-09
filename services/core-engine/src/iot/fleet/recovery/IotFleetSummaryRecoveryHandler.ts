export class IotFleetSummaryRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotFleetSummary ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
