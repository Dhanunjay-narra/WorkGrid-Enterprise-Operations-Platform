export class IntProviderRateLimitCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for IntProviderRateLimit:" + entityId);
  }
}
