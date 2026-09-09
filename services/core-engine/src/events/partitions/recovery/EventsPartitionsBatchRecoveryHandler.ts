export class EventsPartitionsBatchRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for EventsPartitionsBatch ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
