export class DocOcrExtractedDataCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for DocOcrExtractedData:" + entityId);
  }
}
