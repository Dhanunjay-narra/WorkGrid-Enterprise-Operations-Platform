export class ComplianceNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ComplianceNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "ComplianceNode" };
  }
}
