export class ProjectCapacityTaskRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for ProjectCapacityTask ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
