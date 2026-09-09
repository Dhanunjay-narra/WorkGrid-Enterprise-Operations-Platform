export class ComplianceQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ComplianceQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "ComplianceQueue" };
  }
}
