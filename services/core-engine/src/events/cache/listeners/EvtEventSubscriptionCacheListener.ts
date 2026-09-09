export class EvtEventSubscriptionCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for EvtEventSubscription:" + entityId);
  }
}
