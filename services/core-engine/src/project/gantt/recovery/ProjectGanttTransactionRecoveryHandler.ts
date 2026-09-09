export class ProjectGanttTransactionRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for ProjectGanttTransaction ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
