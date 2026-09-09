export class CrmAccountsRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmAccountsRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmAccountsRecord" };
  }
}
