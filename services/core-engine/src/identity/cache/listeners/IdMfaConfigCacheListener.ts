export class IdMfaConfigCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for IdMfaConfig:" + entityId);
  }
}
