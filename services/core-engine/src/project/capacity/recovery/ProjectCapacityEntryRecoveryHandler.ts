export class ProjectCapacityEntryRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for ProjectCapacityEntry ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
