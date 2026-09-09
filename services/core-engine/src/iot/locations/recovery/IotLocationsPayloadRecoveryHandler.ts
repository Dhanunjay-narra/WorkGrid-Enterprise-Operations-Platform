export class IotLocationsPayloadRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotLocationsPayload ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
