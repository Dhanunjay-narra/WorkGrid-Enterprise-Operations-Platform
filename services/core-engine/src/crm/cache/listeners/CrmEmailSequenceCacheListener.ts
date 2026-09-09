export class CrmEmailSequenceCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for CrmEmailSequence:" + entityId);
  }
}
