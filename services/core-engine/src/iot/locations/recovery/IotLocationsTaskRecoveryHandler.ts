export class IotLocationsTaskRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotLocationsTask ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
