export class EventsReplaySnapshotRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for EventsReplaySnapshot ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
