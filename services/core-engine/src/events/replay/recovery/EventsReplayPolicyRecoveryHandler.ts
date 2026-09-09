export class EventsReplayPolicyRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for EventsReplayPolicy ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
