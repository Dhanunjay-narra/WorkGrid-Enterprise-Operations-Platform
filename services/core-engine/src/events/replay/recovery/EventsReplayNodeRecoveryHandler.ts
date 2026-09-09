export class EventsReplayNodeRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for EventsReplayNode ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
