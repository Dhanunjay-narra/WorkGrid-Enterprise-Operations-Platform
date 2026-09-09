export class ComplianceStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ComplianceState" } {
    return { healthy: true, latencyMs: 1.2, entity: "ComplianceState" };
  }
}
