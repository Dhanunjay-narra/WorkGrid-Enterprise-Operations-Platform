export type DocDocumentPermissionState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class DocDocumentPermissionStateMachine {
  private validTransitions: Record<DocDocumentPermissionState, DocDocumentPermissionState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: DocDocumentPermissionState, next: DocDocumentPermissionState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: DocDocumentPermissionState, next: DocDocumentPermissionState): DocDocumentPermissionState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for DocDocumentPermission: from " + current + " to " + next);
    }
    return next;
  }
}
