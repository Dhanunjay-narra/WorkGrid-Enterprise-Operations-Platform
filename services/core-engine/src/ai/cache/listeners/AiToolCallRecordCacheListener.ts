export class AiToolCallRecordCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for AiToolCallRecord:" + entityId);
  }
}
