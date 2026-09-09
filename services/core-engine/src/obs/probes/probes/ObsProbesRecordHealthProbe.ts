export class ObsProbesRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsProbesRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsProbesRecord" };
  }
}
