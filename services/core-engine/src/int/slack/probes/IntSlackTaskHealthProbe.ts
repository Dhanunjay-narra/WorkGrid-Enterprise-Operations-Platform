export class IntSlackTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntSlackTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntSlackTask" };
  }
}
