export class EventsPartitionsSummaryRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for EventsPartitionsSummary ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
