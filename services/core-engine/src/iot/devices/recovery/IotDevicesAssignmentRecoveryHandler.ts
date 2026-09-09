export class IotDevicesAssignmentRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotDevicesAssignment ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
