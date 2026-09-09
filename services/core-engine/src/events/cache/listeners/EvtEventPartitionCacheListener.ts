export class EvtEventPartitionCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for EvtEventPartition:" + entityId);
  }
}
