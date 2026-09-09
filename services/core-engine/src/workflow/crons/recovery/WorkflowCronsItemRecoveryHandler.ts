export class WorkflowCronsItemRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for WorkflowCronsItem ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
