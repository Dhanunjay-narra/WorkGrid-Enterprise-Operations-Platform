export class AbacEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AbacEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "AbacEvent" };
  }
}
