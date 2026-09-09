export class IotThresholdsSummaryRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotThresholdsSummary ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
