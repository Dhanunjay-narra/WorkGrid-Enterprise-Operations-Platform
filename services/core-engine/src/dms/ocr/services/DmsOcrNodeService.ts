import { DmsOcrNodeModel, DmsOcrNodeValidator } from "@nexora/types/domains/dms/ocr/DmsOcrNode";

export class DmsOcrNodeService {
  private repository = new Map<string, DmsOcrNodeModel>();

  public create(data: Omit<DmsOcrNodeModel, "id" | "version" | "createdAt" | "updatedAt">): DmsOcrNodeModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsOcrNodeModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsOcrNodeValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsOcrNode: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsOcrNodeModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsOcrNodeModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsOcrNodeModel>): DmsOcrNodeModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsOcrNodeModel = {
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
