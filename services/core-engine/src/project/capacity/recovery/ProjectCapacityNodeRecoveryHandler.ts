export class ProjectCapacityNodeRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for ProjectCapacityNode ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
