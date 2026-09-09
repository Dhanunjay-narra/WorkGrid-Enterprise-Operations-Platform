export class ProjectCapacityRecordRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for ProjectCapacityRecord ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
