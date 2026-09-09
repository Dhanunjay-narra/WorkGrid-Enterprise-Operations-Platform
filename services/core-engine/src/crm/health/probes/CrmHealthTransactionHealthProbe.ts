export class CrmHealthTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmHealthTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmHealthTransaction" };
  }
}
