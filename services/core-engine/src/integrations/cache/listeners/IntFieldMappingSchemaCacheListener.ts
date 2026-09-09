export class IntFieldMappingSchemaCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for IntFieldMappingSchema:" + entityId);
  }
}
