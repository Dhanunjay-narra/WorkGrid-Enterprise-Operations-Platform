export class PrjProjectHealthMetricCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for PrjProjectHealthMetric:" + entityId);
  }
}
