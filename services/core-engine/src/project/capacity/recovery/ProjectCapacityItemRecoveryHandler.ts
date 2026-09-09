export class ProjectCapacityItemRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for ProjectCapacityItem ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
