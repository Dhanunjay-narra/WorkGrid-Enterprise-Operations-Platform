export class AiAgentMemoryEntryCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for AiAgentMemoryEntry:" + entityId);
  }
}
