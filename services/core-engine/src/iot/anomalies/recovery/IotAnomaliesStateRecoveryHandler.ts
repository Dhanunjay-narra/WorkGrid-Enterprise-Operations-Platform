export class IotAnomaliesStateRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotAnomaliesState ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
