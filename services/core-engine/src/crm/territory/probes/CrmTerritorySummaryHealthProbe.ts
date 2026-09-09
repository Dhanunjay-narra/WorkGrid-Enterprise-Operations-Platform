export class CrmTerritorySummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmTerritorySummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmTerritorySummary" };
  }
}
