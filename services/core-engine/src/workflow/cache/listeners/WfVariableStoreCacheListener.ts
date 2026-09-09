export class WfVariableStoreCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for WfVariableStore:" + entityId);
  }
}
