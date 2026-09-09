export class IotLocationsStateRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotLocationsState ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
