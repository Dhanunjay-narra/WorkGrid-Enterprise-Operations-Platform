export class HrRecruitmentPolicyConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed HrRecruitmentPolicy created event for entity " + event.entityId + " in hr_recruitment");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed HrRecruitmentPolicy updated event for entity " + event.entityId + " in hr_recruitment");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed HrRecruitmentPolicy deleted event for entity " + event.entityId + " in hr_recruitment");
  }
}
