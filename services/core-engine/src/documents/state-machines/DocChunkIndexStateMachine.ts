export type DocChunkIndexState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class DocChunkIndexStateMachine {
  private validTransitions: Record<DocChunkIndexState, DocChunkIndexState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: DocChunkIndexState, next: DocChunkIndexState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: DocChunkIndexState, next: DocChunkIndexState): DocChunkIndexState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for DocChunkIndex: from " + current + " to " + next);
    }
    return next;
  }
}
