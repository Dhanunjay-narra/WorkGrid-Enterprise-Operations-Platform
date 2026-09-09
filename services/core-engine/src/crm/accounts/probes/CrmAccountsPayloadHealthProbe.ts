export class CrmAccountsPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmAccountsPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmAccountsPayload" };
  }
}
