export class PrjTimeEntryCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for PrjTimeEntry:" + entityId);
  }
}
