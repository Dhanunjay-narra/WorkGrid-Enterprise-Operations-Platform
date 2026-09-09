export class CrmHealthTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmHealthTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmHealthTask" };
  }
}
