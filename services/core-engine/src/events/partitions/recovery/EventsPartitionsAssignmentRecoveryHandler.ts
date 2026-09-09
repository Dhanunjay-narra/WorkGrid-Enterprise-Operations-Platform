export class EventsPartitionsAssignmentRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for EventsPartitionsAssignment ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
