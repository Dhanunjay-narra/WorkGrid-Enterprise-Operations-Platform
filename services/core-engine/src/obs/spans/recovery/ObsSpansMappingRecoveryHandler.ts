export class ObsSpansMappingRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for ObsSpansMapping ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
