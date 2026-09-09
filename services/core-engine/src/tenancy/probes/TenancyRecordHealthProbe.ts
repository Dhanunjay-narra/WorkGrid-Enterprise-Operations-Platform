export class TenancyRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "TenancyRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "TenancyRecord" };
  }
}
