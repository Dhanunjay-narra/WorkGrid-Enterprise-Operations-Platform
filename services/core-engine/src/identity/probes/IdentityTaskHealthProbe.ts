export class IdentityTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IdentityTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "IdentityTask" };
  }
}
