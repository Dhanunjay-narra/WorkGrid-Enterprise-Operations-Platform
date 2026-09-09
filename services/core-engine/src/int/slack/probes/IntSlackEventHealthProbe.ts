export class IntSlackEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntSlackEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntSlackEvent" };
  }
}
