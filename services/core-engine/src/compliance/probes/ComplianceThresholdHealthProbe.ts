export class ComplianceThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ComplianceThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "ComplianceThreshold" };
  }
}
