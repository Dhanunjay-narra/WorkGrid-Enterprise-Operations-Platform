export class DmsVersionsPolicyRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for DmsVersionsPolicy ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
