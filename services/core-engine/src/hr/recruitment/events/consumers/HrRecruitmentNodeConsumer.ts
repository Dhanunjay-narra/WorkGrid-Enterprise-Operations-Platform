export class HrRecruitmentNodeConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed HrRecruitmentNode created event for entity " + event.entityId + " in hr_recruitment");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed HrRecruitmentNode updated event for entity " + event.entityId + " in hr_recruitment");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed HrRecruitmentNode deleted event for entity " + event.entityId + " in hr_recruitment");
  }
}
