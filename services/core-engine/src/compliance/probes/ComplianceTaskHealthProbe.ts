export class ComplianceTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ComplianceTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "ComplianceTask" };
  }
}
