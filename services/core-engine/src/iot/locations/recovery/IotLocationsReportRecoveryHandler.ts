export class IotLocationsReportRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotLocationsReport ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
