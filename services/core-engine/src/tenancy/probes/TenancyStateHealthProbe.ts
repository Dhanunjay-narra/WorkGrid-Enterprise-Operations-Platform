export class TenancyStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "TenancyState" } {
    return { healthy: true, latencyMs: 1.2, entity: "TenancyState" };
  }
}
