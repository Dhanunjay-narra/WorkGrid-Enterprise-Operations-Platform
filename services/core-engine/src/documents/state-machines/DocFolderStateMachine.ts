export type DocFolderState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class DocFolderStateMachine {
  private validTransitions: Record<DocFolderState, DocFolderState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: DocFolderState, next: DocFolderState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: DocFolderState, next: DocFolderState): DocFolderState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for DocFolder: from " + current + " to " + next);
    }
    return next;
  }
}
