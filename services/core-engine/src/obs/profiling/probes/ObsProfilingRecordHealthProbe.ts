export class ObsProfilingRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsProfilingRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsProfilingRecord" };
  }
}
