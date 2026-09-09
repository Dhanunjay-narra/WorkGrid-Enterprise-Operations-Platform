export class TenancyProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "TenancyProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "TenancyProfile" };
  }
}
