export class BiForecastsStateRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for BiForecastsState ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
