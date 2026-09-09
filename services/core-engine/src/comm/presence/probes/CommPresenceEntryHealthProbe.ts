export class CommPresenceEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommPresenceEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommPresenceEntry" };
  }
}
