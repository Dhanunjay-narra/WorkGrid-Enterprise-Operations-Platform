export class IotAnomaliesProfileRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotAnomaliesProfile ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
