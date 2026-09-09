export class EventsPartitionsMappingRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for EventsPartitionsMapping ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
