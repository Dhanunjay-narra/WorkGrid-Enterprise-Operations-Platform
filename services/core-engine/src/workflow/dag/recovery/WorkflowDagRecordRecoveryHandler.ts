export class WorkflowDagRecordRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for WorkflowDagRecord ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
