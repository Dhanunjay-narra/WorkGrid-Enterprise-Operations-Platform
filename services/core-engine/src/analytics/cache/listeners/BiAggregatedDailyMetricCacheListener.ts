export class BiAggregatedDailyMetricCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for BiAggregatedDailyMetric:" + entityId);
  }
}
