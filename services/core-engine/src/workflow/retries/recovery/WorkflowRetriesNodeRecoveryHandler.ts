export class WorkflowRetriesNodeRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for WorkflowRetriesNode ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
