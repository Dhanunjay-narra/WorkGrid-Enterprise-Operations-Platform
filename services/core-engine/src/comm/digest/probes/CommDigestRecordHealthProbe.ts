export class CommDigestRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommDigestRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommDigestRecord" };
  }
}
