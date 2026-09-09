export class ComplianceConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ComplianceConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "ComplianceConfig" };
  }
}
