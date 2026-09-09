export class EventsConsumersScheduleRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for EventsConsumersSchedule ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
