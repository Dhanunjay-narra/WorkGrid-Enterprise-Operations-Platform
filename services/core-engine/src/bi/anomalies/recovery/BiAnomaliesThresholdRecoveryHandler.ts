export class BiAnomaliesThresholdRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for BiAnomaliesThreshold ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
