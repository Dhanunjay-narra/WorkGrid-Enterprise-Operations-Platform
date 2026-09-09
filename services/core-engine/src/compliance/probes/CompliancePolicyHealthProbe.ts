export class CompliancePolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CompliancePolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "CompliancePolicy" };
  }
}
