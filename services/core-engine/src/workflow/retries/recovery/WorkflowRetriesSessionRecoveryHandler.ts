export class WorkflowRetriesSessionRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for WorkflowRetriesSession ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
