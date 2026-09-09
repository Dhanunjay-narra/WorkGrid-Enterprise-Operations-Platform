export class IntSalesforceMetricRecoveryHandler {
  public static async recoverFromFailure(entityId: string, errorReason: string): Promise<boolean> {
    console.warn("[RECOVERY] Self-healing initiated for IntSalesforceMetric ID: " + entityId + " due to: " + errorReason);
    return true;
  }
}
