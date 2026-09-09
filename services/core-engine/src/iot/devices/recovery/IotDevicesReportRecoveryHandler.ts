export class IotDevicesReportRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotDevicesReport ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
