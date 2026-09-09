export type DocTemplateDocumentState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class DocTemplateDocumentStateMachine {
  private validTransitions: Record<DocTemplateDocumentState, DocTemplateDocumentState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: DocTemplateDocumentState, next: DocTemplateDocumentState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: DocTemplateDocumentState, next: DocTemplateDocumentState): DocTemplateDocumentState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for DocTemplateDocument: from " + current + " to " + next);
    }
    return next;
  }
}
