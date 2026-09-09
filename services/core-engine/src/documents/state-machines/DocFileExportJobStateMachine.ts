export type DocFileExportJobState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class DocFileExportJobStateMachine {
  private validTransitions: Record<DocFileExportJobState, DocFileExportJobState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: DocFileExportJobState, next: DocFileExportJobState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: DocFileExportJobState, next: DocFileExportJobState): DocFileExportJobState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for DocFileExportJob: from " + current + " to " + next);
    }
    return next;
  }
}
