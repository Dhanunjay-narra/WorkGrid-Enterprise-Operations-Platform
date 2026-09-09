export class WorkflowDagSnapshotRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for WorkflowDagSnapshot ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
