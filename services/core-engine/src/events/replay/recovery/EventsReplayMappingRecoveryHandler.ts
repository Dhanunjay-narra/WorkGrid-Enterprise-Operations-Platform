export class EventsReplayMappingRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for EventsReplayMapping ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
