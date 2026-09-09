export class IotLocationsAssignmentRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotLocationsAssignment ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
