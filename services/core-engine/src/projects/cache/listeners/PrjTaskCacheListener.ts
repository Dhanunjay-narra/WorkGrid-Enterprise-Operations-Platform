export class PrjTaskCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for PrjTask:" + entityId);
  }
}
