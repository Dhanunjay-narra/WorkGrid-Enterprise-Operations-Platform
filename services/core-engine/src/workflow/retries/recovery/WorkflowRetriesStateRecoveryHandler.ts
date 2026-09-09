export class WorkflowRetriesStateRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for WorkflowRetriesState ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
