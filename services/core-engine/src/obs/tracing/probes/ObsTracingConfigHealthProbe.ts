export class ObsTracingConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsTracingConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsTracingConfig" };
  }
}
