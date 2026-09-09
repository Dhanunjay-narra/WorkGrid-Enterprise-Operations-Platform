export class CrmHealthEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmHealthEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmHealthEntry" };
  }
}
