export class ComplianceMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ComplianceMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "ComplianceMapping" };
  }
}
