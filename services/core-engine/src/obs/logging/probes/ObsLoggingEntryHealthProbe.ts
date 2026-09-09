export class ObsLoggingEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsLoggingEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsLoggingEntry" };
  }
}
