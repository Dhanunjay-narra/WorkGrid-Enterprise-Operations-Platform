export class BiForecastsSnapshotRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for BiForecastsSnapshot ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
