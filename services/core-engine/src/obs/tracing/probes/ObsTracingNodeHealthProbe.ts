export class ObsTracingNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsTracingNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsTracingNode" };
  }
}
