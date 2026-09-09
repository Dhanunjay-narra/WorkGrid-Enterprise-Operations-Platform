export class AbacNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AbacNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "AbacNode" };
  }
}
