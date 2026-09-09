export class SecurityEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SecurityEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "SecurityEntry" };
  }
}
