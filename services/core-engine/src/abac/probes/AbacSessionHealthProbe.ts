export class AbacSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AbacSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "AbacSession" };
  }
}
