export class SupCustomerSurveyCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for SupCustomerSurvey:" + entityId);
  }
}
