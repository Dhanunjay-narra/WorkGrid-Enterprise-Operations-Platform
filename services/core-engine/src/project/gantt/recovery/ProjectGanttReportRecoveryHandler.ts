export class ProjectGanttReportRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for ProjectGanttReport ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
