export class IdDeviceCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for IdDevice:" + entityId);
  }
}
