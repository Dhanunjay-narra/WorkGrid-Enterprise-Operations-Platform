export class BiAnomalyThresholdCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for BiAnomalyThreshold:" + entityId);
  }
}
