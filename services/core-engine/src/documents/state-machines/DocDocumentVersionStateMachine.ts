export type DocDocumentVersionState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class DocDocumentVersionStateMachine {
  private validTransitions: Record<DocDocumentVersionState, DocDocumentVersionState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: DocDocumentVersionState, next: DocDocumentVersionState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: DocDocumentVersionState, next: DocDocumentVersionState): DocDocumentVersionState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for DocDocumentVersion: from " + current + " to " + next);
    }
    return next;
  }
}
