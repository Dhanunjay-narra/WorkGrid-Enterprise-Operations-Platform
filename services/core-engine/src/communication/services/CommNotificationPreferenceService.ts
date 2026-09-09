import { CommNotificationPreferenceData, CommNotificationPreferenceValidator } from "../../../../packages/types/src/domains/communication/CommNotificationPreference";

export class CommNotificationPreferenceService {
  private repository = new Map<string, CommNotificationPreferenceData>();

  public create(data: Omit<CommNotificationPreferenceData, "id" | "createdAt" | "updatedAt">): CommNotificationPreferenceData {
    const id = "com_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: CommNotificationPreferenceData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommNotificationPreferenceValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommNotificationPreference: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommNotificationPreferenceData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): CommNotificationPreferenceData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<CommNotificationPreferenceData>): CommNotificationPreferenceData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommNotificationPreferenceData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
