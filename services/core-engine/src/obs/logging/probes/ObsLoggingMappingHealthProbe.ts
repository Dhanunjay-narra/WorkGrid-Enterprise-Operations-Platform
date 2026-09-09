export class ObsLoggingMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsLoggingMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsLoggingMapping" };
  }
}
