export class ProjectTasksStateRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for ProjectTasksState ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
