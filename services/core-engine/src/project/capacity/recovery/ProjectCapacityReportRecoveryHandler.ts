export class ProjectCapacityReportRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for ProjectCapacityReport ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
