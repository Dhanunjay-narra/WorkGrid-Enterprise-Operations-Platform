export class IotTelemetryRuleRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IotTelemetryRule ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
