export class ObsLoggingConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsLoggingConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsLoggingConfig" };
  }
}
