export class CommCallRoomCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for CommCallRoom:" + entityId);
  }
}
