export class SecTamperLogCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for SecTamperLog:" + entityId);
  }
}
