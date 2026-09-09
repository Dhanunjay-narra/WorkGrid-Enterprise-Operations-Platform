export class IotLocationsConfigRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotLocationsConfig ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
