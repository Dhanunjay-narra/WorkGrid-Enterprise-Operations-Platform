export class ObsAlertsSessionConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ObsAlertsSession created event for entity " + event.entityId + " in obs_alerts");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ObsAlertsSession updated event for entity " + event.entityId + " in obs_alerts");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ObsAlertsSession deleted event for entity " + event.entityId + " in obs_alerts");
  }
}
