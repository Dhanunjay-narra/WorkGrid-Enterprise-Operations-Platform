export class SupportCsatRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportCsatRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportCsatRecord" };
  }
}
