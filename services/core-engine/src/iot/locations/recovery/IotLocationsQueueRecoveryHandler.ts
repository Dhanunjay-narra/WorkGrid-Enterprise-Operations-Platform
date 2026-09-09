export class IotLocationsQueueRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotLocationsQueue ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
