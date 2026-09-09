export class EvtStreamSnapshotCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for EvtStreamSnapshot:" + entityId);
  }
}
