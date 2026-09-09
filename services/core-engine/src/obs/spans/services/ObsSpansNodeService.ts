import { ObsSpansNodeModel, ObsSpansNodeValidator } from "@nexora/types/domains/obs/spans/ObsSpansNode";

export class ObsSpansNodeService {
  private repository = new Map<string, ObsSpansNodeModel>();

  public create(data: Omit<ObsSpansNodeModel, "id" | "version" | "createdAt" | "updatedAt">): ObsSpansNodeModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsSpansNodeModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsSpansNodeValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsSpansNode: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsSpansNodeModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsSpansNodeModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsSpansNodeModel>): ObsSpansNodeModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsSpansNodeModel = {
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
