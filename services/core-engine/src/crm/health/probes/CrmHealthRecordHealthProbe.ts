export class CrmHealthRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmHealthRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmHealthRecord" };
  }
}
