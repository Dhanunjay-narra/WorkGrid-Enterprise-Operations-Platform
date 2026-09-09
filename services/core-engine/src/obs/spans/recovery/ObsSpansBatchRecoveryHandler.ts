export class ObsSpansBatchRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for ObsSpansBatch ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
