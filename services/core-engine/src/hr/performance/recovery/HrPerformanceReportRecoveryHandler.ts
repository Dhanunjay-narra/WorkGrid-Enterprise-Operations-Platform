export class HrPerformanceReportRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for HrPerformanceReport ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
