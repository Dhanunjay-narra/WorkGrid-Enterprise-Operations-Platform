import { CommBroadcastAnnouncementData, CommBroadcastAnnouncementValidator } from "../../../../packages/types/src/domains/communication/CommBroadcastAnnouncement";

export class CommBroadcastAnnouncementService {
  private repository = new Map<string, CommBroadcastAnnouncementData>();

  public create(data: Omit<CommBroadcastAnnouncementData, "id" | "createdAt" | "updatedAt">): CommBroadcastAnnouncementData {
    const id = "com_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: CommBroadcastAnnouncementData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommBroadcastAnnouncementValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommBroadcastAnnouncement: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommBroadcastAnnouncementData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): CommBroadcastAnnouncementData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<CommBroadcastAnnouncementData>): CommBroadcastAnnouncementData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommBroadcastAnnouncementData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
