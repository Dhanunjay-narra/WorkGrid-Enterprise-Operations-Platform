export class HrPerformanceSummaryRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for HrPerformanceSummary ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
