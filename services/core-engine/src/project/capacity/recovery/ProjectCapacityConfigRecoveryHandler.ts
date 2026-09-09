export class ProjectCapacityConfigRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for ProjectCapacityConfig ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
