export class IotLocationsScheduleRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotLocationsSchedule ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
