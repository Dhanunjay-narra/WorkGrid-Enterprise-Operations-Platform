export class DocRetentionScheduleCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for DocRetentionSchedule:" + entityId);
  }
}
