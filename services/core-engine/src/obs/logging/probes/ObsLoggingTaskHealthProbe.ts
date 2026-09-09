export class ObsLoggingTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsLoggingTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsLoggingTask" };
  }
}
