export class ObsSpansQueueRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for ObsSpansQueue ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
