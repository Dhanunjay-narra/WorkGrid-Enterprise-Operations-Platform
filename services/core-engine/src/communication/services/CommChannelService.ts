import { CommChannelData, CommChannelValidator } from "../../../../packages/types/src/domains/communication/CommChannel";

export class CommChannelService {
  private repository = new Map<string, CommChannelData>();

  public create(data: Omit<CommChannelData, "id" | "createdAt" | "updatedAt">): CommChannelData {
    const id = "com_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: CommChannelData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommChannelValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommChannel: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommChannelData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): CommChannelData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<CommChannelData>): CommChannelData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommChannelData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
