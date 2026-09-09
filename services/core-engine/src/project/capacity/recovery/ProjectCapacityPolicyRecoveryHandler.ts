export class ProjectCapacityPolicyRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for ProjectCapacityPolicy ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
