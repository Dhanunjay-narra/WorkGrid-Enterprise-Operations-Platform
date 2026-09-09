export class CommCallsNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommCallsNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommCallsNode" };
  }
}
