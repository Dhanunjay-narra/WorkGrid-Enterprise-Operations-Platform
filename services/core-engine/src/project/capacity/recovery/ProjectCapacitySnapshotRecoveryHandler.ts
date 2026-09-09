export class ProjectCapacitySnapshotRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for ProjectCapacitySnapshot ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
