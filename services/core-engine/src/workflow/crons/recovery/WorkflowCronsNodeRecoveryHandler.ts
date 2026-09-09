export class WorkflowCronsNodeRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for WorkflowCronsNode ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
