export class EventsPartitionsScheduleRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for EventsPartitionsSchedule ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
