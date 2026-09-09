export class EvtDeadLetterEventCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for EvtDeadLetterEvent:" + entityId);
  }
}
