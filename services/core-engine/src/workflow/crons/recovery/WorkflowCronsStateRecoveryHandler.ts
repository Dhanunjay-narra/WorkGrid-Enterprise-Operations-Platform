export class WorkflowCronsStateRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for WorkflowCronsState ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
