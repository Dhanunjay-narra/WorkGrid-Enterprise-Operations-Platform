export class IdentityReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IdentityReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "IdentityReport" };
  }
}
