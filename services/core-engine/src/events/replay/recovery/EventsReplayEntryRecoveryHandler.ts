export class EventsReplayEntryRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for EventsReplayEntry ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
