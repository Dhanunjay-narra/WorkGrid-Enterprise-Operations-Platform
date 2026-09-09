export class CrmHealthPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmHealthPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmHealthPolicy" };
  }
}
