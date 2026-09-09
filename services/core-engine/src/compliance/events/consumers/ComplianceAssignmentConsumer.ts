export class ComplianceAssignmentConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ComplianceAssignment created event for entity " + event.entityId + " in compliance");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ComplianceAssignment updated event for entity " + event.entityId + " in compliance");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ComplianceAssignment deleted event for entity " + event.entityId + " in compliance");
  }
}
