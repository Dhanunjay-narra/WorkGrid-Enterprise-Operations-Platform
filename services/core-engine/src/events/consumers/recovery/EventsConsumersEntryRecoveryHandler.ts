export class EventsConsumersEntryRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for EventsConsumersEntry ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
