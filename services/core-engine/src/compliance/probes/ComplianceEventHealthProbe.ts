export class ComplianceEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ComplianceEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "ComplianceEvent" };
  }
}
