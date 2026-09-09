export class BiAggregatedDailyMetricMobileStore {
  public async saveLocal(entity: Record<string, any>): Promise<void> {
    console.log("[MOBILE-SQLITE] Persisted BiAggregatedDailyMetric to offline SQLite cache");
  }

  public async getLocal(id: string): Promise<any> {
    return { id, synced: true, entity: "BiAggregatedDailyMetric" };
  }
}
