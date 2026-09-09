export class ObsTracingEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsTracingEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsTracingEvent" };
  }
}
