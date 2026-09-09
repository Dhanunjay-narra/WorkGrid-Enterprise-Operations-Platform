import { CrmMeetingData, CrmMeetingValidator } from "../../../../packages/types/src/domains/crm/CrmMeeting";

export class CrmMeetingService {
  private repository = new Map<string, CrmMeetingData>();

  public create(data: Omit<CrmMeetingData, "id" | "createdAt" | "updatedAt">): CrmMeetingData {
    const id = "crm_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: CrmMeetingData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmMeetingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmMeeting: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmMeetingData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): CrmMeetingData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<CrmMeetingData>): CrmMeetingData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmMeetingData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
