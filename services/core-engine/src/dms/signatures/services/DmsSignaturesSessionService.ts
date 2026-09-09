import { DmsSignaturesSessionModel, DmsSignaturesSessionValidator } from "@nexora/types/domains/dms/signatures/DmsSignaturesSession";

export class DmsSignaturesSessionService {
  private repository = new Map<string, DmsSignaturesSessionModel>();

  public create(data: Omit<DmsSignaturesSessionModel, "id" | "version" | "createdAt" | "updatedAt">): DmsSignaturesSessionModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsSignaturesSessionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsSignaturesSessionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsSignaturesSession: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsSignaturesSessionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsSignaturesSessionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsSignaturesSessionModel>): DmsSignaturesSessionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsSignaturesSessionModel = {
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
