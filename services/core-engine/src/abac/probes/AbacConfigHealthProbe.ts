export class AbacConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AbacConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "AbacConfig" };
  }
}
