export class AbacPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AbacPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "AbacPolicy" };
  }
}
