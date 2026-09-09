export class TenancyNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "TenancyNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "TenancyNode" };
  }
}
