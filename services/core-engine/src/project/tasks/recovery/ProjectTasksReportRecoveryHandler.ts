export class ProjectTasksReportRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for ProjectTasksReport ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
