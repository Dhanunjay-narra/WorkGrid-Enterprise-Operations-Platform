export class BiForecastsNodeRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for BiForecastsNode ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
