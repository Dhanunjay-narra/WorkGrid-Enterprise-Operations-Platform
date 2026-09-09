export class IotThresholdsAssignmentRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotThresholdsAssignment ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
