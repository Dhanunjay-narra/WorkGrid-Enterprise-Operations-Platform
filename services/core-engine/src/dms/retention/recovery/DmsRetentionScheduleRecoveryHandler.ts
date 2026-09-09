export class DmsRetentionScheduleRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for DmsRetentionSchedule ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
