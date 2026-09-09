export class CrmPipelineCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for CrmPipeline:" + entityId);
  }
}
