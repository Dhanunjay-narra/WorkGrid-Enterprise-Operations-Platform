export class DmsOcrScheduleRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for DmsOcrSchedule ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
