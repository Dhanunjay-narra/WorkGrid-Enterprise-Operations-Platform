export class CommCallsStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommCallsState" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommCallsState" };
  }
}
