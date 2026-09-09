export class TenancyTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "TenancyTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "TenancyTask" };
  }
}
