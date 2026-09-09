import { InvStorageBinData, InvStorageBinValidator } from "../../../../packages/types/src/domains/inventory/InvStorageBin";

export class InvStorageBinService {
  private repository = new Map<string, InvStorageBinData>();

  public create(data: Omit<InvStorageBinData, "id" | "createdAt" | "updatedAt">): InvStorageBinData {
    const id = "inv_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: InvStorageBinData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = InvStorageBinValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InvStorageBin: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InvStorageBinData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): InvStorageBinData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<InvStorageBinData>): InvStorageBinData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InvStorageBinData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
