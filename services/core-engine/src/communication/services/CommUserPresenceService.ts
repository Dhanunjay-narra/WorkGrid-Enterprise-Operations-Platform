import { CommUserPresenceData, CommUserPresenceValidator } from "../../../../packages/types/src/domains/communication/CommUserPresence";

export class CommUserPresenceService {
  private repository = new Map<string, CommUserPresenceData>();

  public create(data: Omit<CommUserPresenceData, "id" | "createdAt" | "updatedAt">): CommUserPresenceData {
    const id = "com_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: CommUserPresenceData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommUserPresenceValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommUserPresence: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommUserPresenceData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): CommUserPresenceData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<CommUserPresenceData>): CommUserPresenceData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommUserPresenceData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
