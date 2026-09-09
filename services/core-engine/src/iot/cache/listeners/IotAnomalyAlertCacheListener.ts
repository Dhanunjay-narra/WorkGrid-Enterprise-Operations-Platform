export class IotAnomalyAlertCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for IotAnomalyAlert:" + entityId);
  }
}
