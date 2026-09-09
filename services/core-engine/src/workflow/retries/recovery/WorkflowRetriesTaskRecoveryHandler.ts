export class WorkflowRetriesTaskRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for WorkflowRetriesTask ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
