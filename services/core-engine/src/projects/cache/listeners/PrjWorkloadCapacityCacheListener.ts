export class PrjWorkloadCapacityCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for PrjWorkloadCapacity:" + entityId);
  }
}
