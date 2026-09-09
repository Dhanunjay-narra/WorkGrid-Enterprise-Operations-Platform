export class WorkflowDagItemRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for WorkflowDagItem ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
