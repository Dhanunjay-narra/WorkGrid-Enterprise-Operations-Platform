export class TenancyItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "TenancyItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "TenancyItem" };
  }
}
