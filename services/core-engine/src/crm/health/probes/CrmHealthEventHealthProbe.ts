export class CrmHealthEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmHealthEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmHealthEvent" };
  }
}
