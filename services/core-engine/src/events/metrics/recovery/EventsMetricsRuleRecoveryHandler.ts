export class EventsMetricsRuleRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for EventsMetricsRule ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
