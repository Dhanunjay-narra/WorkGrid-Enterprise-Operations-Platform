export class ComplianceRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ComplianceRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "ComplianceRule" };
  }
}
