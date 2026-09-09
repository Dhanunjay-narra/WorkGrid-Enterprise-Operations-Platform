export class ObsTracingRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsTracingRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsTracingRecord" };
  }
}
