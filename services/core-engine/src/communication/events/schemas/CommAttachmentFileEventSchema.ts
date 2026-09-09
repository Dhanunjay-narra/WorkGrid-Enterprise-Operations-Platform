export interface CommAttachmentFileEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class CommAttachmentFileEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
