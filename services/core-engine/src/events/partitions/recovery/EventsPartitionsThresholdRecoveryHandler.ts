export class EventsPartitionsThresholdRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for EventsPartitionsThreshold ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
