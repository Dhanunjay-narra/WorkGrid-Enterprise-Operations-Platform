export class IntSyncQueueItemCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for IntSyncQueueItem:" + entityId);
  }
}
