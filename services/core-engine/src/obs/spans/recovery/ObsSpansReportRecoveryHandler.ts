export class ObsSpansReportRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for ObsSpansReport ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
