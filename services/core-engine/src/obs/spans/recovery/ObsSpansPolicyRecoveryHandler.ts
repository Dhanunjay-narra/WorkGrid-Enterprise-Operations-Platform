export class ObsSpansPolicyRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for ObsSpansPolicy ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
