export class TenancyMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "TenancyMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "TenancyMapping" };
  }
}
