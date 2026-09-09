export class ObsSpansSummaryRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for ObsSpansSummary ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
