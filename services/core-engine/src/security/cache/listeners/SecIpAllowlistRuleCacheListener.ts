export class SecIpAllowlistRuleCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for SecIpAllowlistRule:" + entityId);
  }
}
