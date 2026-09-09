export class IntOAuthConnectionCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for IntOAuthConnection:" + entityId);
  }
}
