export class CommCallsTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommCallsTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommCallsTask" };
  }
}
