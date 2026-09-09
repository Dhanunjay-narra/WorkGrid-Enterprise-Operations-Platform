import { DmsVersionsNodeModel, DmsVersionsNodeValidator } from "@nexora/types/domains/dms/versions/DmsVersionsNode";

export class DmsVersionsNodeService {
  private repository = new Map<string, DmsVersionsNodeModel>();

  public create(data: Omit<DmsVersionsNodeModel, "id" | "version" | "createdAt" | "updatedAt">): DmsVersionsNodeModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsVersionsNodeModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsVersionsNodeValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsVersionsNode: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsVersionsNodeModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsVersionsNodeModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsVersionsNodeModel>): DmsVersionsNodeModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsVersionsNodeModel = {
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
