import { CommChannelMemberData, CommChannelMemberValidator } from "../../../../packages/types/src/domains/communication/CommChannelMember";

export class CommChannelMemberService {
  private repository = new Map<string, CommChannelMemberData>();

  public create(data: Omit<CommChannelMemberData, "id" | "createdAt" | "updatedAt">): CommChannelMemberData {
    const id = "com_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: CommChannelMemberData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommChannelMemberValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommChannelMember: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommChannelMemberData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): CommChannelMemberData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<CommChannelMemberData>): CommChannelMemberData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommChannelMemberData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
