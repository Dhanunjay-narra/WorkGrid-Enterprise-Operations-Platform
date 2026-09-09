export class EvtPublishMetricCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for EvtPublishMetric:" + entityId);
  }
}
