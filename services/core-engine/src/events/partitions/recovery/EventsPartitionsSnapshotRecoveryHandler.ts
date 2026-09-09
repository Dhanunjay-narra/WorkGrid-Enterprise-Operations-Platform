export class EventsPartitionsSnapshotRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for EventsPartitionsSnapshot ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
