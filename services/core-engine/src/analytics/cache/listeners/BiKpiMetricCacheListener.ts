export class BiKpiMetricCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for BiKpiMetric:" + entityId);
  }
}
