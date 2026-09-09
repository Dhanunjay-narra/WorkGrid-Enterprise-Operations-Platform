export class PrjSprintCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for PrjSprint:" + entityId);
  }
}
