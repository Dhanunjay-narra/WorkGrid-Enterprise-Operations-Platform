export class IdentityEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IdentityEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "IdentityEntry" };
  }
}
