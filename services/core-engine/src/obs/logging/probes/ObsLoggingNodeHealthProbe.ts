export class ObsLoggingNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsLoggingNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsLoggingNode" };
  }
}
