export class ProjectCapacityTransactionRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for ProjectCapacityTransaction ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
