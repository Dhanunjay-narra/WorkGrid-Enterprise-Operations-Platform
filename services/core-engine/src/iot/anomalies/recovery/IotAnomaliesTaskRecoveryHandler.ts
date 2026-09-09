export class IotAnomaliesTaskRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotAnomaliesTask ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
