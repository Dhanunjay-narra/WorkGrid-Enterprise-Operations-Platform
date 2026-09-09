export class CrmTerritoryPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmTerritoryPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmTerritoryPayload" };
  }
}
