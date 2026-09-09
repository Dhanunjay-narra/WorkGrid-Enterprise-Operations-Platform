export class SecRateLimitCounterCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for SecRateLimitCounter:" + entityId);
  }
}
