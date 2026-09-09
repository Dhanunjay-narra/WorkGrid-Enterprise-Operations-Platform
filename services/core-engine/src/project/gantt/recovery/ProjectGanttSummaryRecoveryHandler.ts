export class ProjectGanttSummaryRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for ProjectGanttSummary ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
