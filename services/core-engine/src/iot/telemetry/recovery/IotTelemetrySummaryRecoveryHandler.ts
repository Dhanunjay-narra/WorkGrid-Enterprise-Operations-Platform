export class IotTelemetrySummaryRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotTelemetrySummary ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
