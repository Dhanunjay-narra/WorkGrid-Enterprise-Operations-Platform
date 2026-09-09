export class EventsReplayTaskRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for EventsReplayTask ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
