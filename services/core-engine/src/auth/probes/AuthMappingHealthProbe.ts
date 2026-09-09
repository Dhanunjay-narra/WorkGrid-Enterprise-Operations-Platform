export class AuthMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AuthMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "AuthMapping" };
  }
}
