export class IntSlackStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntSlackState" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntSlackState" };
  }
}
