export type DocMetadataTagState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class DocMetadataTagStateMachine {
  private validTransitions: Record<DocMetadataTagState, DocMetadataTagState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: DocMetadataTagState, next: DocMetadataTagState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: DocMetadataTagState, next: DocMetadataTagState): DocMetadataTagState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for DocMetadataTag: from " + current + " to " + next);
    }
    return next;
  }
}
