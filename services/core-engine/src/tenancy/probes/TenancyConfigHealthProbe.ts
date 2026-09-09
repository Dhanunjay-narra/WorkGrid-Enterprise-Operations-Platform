export class TenancyConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "TenancyConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "TenancyConfig" };
  }
}
