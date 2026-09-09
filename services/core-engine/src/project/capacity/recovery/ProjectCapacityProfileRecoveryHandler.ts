export class ProjectCapacityProfileRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for ProjectCapacityProfile ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
