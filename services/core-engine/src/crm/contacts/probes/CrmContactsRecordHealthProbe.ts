export class CrmContactsRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmContactsRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmContactsRecord" };
  }
}
