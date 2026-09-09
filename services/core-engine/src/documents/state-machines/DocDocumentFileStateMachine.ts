export type DocDocumentFileState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class DocDocumentFileStateMachine {
  private validTransitions: Record<DocDocumentFileState, DocDocumentFileState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: DocDocumentFileState, next: DocDocumentFileState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: DocDocumentFileState, next: DocDocumentFileState): DocDocumentFileState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for DocDocumentFile: from " + current + " to " + next);
    }
    return next;
  }
}
