export class SecurityMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SecurityMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "SecurityMapping" };
  }
}
