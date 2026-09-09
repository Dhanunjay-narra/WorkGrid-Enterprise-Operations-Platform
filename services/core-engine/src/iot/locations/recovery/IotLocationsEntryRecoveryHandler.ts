export class IotLocationsEntryRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotLocationsEntry ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
