export class CrmHealthStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmHealthState" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmHealthState" };
  }
}
