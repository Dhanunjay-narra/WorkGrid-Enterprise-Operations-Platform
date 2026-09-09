export class PrjWorkspaceCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for PrjWorkspace:" + entityId);
  }
}
