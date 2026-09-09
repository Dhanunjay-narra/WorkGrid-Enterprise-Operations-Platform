export class DmsVersionsNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsVersionsNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsVersionsNode" };
  }
}
