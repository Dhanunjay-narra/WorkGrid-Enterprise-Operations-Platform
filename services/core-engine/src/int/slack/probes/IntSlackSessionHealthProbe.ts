export class IntSlackSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntSlackSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntSlackSession" };
  }
}
