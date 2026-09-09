export class ObsTracingTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsTracingTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsTracingTask" };
  }
}
