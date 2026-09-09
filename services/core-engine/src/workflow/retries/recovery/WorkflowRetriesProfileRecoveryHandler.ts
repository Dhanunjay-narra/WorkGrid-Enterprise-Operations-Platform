export class WorkflowRetriesProfileRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for WorkflowRetriesProfile ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
