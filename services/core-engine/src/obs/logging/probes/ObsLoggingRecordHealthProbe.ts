export class ObsLoggingRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsLoggingRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsLoggingRecord" };
  }
}
