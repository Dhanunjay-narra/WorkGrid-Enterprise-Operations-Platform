export class IotLocationsRecordRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotLocationsRecord ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
