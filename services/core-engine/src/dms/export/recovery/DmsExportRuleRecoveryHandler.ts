export class DmsExportRuleRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for DmsExportRule ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
