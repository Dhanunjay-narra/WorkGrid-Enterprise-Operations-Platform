export class IdSessionCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for IdSession:" + entityId);
  }
}
