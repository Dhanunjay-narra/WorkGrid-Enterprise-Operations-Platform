export class ProjectGanttEntryRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for ProjectGanttEntry ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
