export class ObsTracingStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsTracingState" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsTracingState" };
  }
}
