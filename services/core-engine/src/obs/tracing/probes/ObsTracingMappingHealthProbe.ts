export class ObsTracingMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsTracingMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsTracingMapping" };
  }
}
