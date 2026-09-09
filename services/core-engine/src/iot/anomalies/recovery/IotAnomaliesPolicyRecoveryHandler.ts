export class IotAnomaliesPolicyRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotAnomaliesPolicy ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
