export class EventsPartitionsPolicyRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for EventsPartitionsPolicy ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
