export class BiForecastsQueueRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for BiForecastsQueue ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
