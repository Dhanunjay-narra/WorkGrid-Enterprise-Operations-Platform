export class IntHealthCheckPingCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for IntHealthCheckPing:" + entityId);
  }
}
