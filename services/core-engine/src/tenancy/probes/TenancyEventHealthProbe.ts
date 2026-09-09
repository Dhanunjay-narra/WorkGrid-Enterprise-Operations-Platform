export class TenancyEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "TenancyEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "TenancyEvent" };
  }
}
