export class ObsSpansRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsSpansRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsSpansRecord" };
  }
}
