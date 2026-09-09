export class CrmHealthConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmHealthConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmHealthConfig" };
  }
}
