import { PrjSprintRetrospectiveData, PrjSprintRetrospectiveValidator } from "../../../../packages/types/src/domains/projects/PrjSprintRetrospective";

export class PrjSprintRetrospectiveService {
  private repository = new Map<string, PrjSprintRetrospectiveData>();

  public create(data: Omit<PrjSprintRetrospectiveData, "id" | "createdAt" | "updatedAt">): PrjSprintRetrospectiveData {
    const id = "pro_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: PrjSprintRetrospectiveData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = PrjSprintRetrospectiveValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for PrjSprintRetrospective: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): PrjSprintRetrospectiveData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): PrjSprintRetrospectiveData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<PrjSprintRetrospectiveData>): PrjSprintRetrospectiveData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: PrjSprintRetrospectiveData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
