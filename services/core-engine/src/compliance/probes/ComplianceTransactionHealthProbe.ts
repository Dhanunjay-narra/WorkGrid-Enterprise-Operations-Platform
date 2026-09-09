export class ComplianceTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ComplianceTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "ComplianceTransaction" };
  }
}
