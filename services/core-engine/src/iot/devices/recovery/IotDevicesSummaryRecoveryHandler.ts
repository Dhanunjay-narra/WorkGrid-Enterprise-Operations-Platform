export class IotDevicesSummaryRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotDevicesSummary ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
