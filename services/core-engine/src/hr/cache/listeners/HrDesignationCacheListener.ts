export class HrDesignationCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for HrDesignation:" + entityId);
  }
}
