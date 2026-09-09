export class IdSsoConfigCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for IdSsoConfig:" + entityId);
  }
}
