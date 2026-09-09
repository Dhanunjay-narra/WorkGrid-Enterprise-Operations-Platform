export class BiCohortsRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiCohortsRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiCohortsRecord" };
  }
}
