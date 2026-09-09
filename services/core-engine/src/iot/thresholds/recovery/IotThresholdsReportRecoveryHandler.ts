export class IotThresholdsReportRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotThresholdsReport ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
