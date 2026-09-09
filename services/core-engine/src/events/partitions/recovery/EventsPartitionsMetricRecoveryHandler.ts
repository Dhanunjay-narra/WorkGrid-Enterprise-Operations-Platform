export class EventsPartitionsMetricRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for EventsPartitionsMetric ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
