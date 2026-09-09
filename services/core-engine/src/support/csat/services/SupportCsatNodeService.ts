import { SupportCsatNodeModel, SupportCsatNodeValidator } from "@nexora/types/domains/support/csat/SupportCsatNode";

export class SupportCsatNodeService {
  private repository = new Map<string, SupportCsatNodeModel>();

  public create(data: Omit<SupportCsatNodeModel, "id" | "version" | "createdAt" | "updatedAt">): SupportCsatNodeModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportCsatNodeModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportCsatNodeValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportCsatNode: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportCsatNodeModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportCsatNodeModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportCsatNodeModel>): SupportCsatNodeModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportCsatNodeModel = {
      ...existing,
      ...updates,
      version: existing.version + 1,
      updatedAt: new Date().toISOString()
    };
    this.repository.set(id, updated);
    return updated;
  }

  public remove(id: string): boolean {
    return this.repository.delete(id);
  }
}
