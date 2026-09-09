import { CommAttachmentFileData, CommAttachmentFileValidator } from "../../../../packages/types/src/domains/communication/CommAttachmentFile";

export class CommAttachmentFileService {
  private repository = new Map<string, CommAttachmentFileData>();

  public create(data: Omit<CommAttachmentFileData, "id" | "createdAt" | "updatedAt">): CommAttachmentFileData {
    const id = "com_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: CommAttachmentFileData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommAttachmentFileValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommAttachmentFile: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommAttachmentFileData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): CommAttachmentFileData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<CommAttachmentFileData>): CommAttachmentFileData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommAttachmentFileData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
