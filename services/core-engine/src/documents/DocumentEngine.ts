import { UUID } from '@nexora/types';

export interface DocumentEntry {
  id: UUID;
  tenantId: UUID;
  filename: string;
  sizeBytes: number;
  uploadedAt: string;
}

export class DocumentEngine {
  private docs = new Map<UUID, DocumentEntry>();

  public registerDocument(tenantId: UUID, filename: string, sizeBytes: number): DocumentEntry {
    const doc: DocumentEntry = {
      id: 'doc_' + Math.random().toString(36).substring(2, 9),
      tenantId,
      filename,
      sizeBytes,
      uploadedAt: new Date().toISOString()
    };
    this.docs.set(doc.id, doc);
    return doc;
  }
}
