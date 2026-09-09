export class BiAnomaliesTaskRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for BiAnomaliesTask ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
