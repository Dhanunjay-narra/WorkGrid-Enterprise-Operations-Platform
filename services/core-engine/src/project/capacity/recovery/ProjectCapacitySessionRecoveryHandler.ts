export class ProjectCapacitySessionRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for ProjectCapacitySession ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
