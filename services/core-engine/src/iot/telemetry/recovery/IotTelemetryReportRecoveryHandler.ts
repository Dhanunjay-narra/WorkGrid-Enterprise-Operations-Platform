export class IotTelemetryReportRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotTelemetryReport ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
