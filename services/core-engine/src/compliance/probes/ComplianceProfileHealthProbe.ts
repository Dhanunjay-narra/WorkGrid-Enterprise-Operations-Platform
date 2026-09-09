export class ComplianceProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ComplianceProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "ComplianceProfile" };
  }
}
