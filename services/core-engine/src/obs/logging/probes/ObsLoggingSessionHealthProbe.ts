export class ObsLoggingSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsLoggingSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsLoggingSession" };
  }
}
