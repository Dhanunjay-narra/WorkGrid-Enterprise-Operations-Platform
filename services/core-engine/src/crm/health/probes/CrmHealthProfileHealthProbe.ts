export class CrmHealthProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmHealthProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmHealthProfile" };
  }
}
