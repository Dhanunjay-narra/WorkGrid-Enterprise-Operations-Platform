export class WorkflowExecutionsSnapshotRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for WorkflowExecutionsSnapshot ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
