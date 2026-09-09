import { BiKpisSessionModel, BiKpisSessionValidator } from "@nexora/types/domains/bi/kpis/BiKpisSession";

export class BiKpisSessionService {
  private repository = new Map<string, BiKpisSessionModel>();

  public create(data: Omit<BiKpisSessionModel, "id" | "version" | "createdAt" | "updatedAt">): BiKpisSessionModel {
    const id = "bi_k_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiKpisSessionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiKpisSessionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiKpisSession: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiKpisSessionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiKpisSessionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiKpisSessionModel>): BiKpisSessionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiKpisSessionModel = {
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
