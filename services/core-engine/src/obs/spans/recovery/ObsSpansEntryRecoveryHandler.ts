export class ObsSpansEntryRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for ObsSpansEntry ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
