import { PrjSubtaskData, PrjSubtaskValidator } from "../../../../packages/types/src/domains/projects/PrjSubtask";

export class PrjSubtaskService {
  private repository = new Map<string, PrjSubtaskData>();

  public create(data: Omit<PrjSubtaskData, "id" | "createdAt" | "updatedAt">): PrjSubtaskData {
    const id = "pro_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: PrjSubtaskData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = PrjSubtaskValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for PrjSubtask: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): PrjSubtaskData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): PrjSubtaskData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<PrjSubtaskData>): PrjSubtaskData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: PrjSubtaskData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
