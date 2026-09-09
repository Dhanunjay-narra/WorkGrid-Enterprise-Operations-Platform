export class DocStorageBucketCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for DocStorageBucket:" + entityId);
  }
}
