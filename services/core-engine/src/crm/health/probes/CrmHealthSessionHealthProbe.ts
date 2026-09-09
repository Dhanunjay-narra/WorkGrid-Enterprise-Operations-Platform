export class CrmHealthSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmHealthSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmHealthSession" };
  }
}
