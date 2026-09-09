export class AiToolDefinitionCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for AiToolDefinition:" + entityId);
  }
}
