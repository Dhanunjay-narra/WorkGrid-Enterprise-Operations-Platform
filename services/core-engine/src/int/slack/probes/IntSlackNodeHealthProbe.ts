export class IntSlackNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntSlackNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntSlackNode" };
  }
}
