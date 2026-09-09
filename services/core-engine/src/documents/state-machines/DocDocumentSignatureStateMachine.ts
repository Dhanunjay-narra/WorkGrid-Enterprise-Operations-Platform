export type DocDocumentSignatureState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class DocDocumentSignatureStateMachine {
  private validTransitions: Record<DocDocumentSignatureState, DocDocumentSignatureState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: DocDocumentSignatureState, next: DocDocumentSignatureState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: DocDocumentSignatureState, next: DocDocumentSignatureState): DocDocumentSignatureState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for DocDocumentSignature: from " + current + " to " + next);
    }
    return next;
  }
}
