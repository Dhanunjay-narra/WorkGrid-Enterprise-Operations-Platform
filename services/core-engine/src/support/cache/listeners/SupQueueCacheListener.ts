export class SupQueueCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for SupQueue:" + entityId);
  }
}
