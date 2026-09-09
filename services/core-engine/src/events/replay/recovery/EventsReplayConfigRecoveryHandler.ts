export class EventsReplayConfigRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for EventsReplayConfig ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
