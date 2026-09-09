export class IntAuthTokenPairCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for IntAuthTokenPair:" + entityId);
  }
}
