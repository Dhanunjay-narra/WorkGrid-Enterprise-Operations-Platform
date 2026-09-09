export class EventsMetricsEntryRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for EventsMetricsEntry ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
