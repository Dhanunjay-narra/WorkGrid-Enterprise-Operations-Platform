import { PrjEpicData, PrjEpicValidator } from "../../../../packages/types/src/domains/projects/PrjEpic";

export class PrjEpicService {
  private repository = new Map<string, PrjEpicData>();

  public create(data: Omit<PrjEpicData, "id" | "createdAt" | "updatedAt">): PrjEpicData {
    const id = "pro_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: PrjEpicData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = PrjEpicValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for PrjEpic: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): PrjEpicData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): PrjEpicData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<PrjEpicData>): PrjEpicData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: PrjEpicData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
