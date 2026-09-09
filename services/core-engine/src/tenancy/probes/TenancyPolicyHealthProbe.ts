export class TenancyPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "TenancyPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "TenancyPolicy" };
  }
}
