export type DocStorageBucketState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class DocStorageBucketStateMachine {
  private validTransitions: Record<DocStorageBucketState, DocStorageBucketState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: DocStorageBucketState, next: DocStorageBucketState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: DocStorageBucketState, next: DocStorageBucketState): DocStorageBucketState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for DocStorageBucket: from " + current + " to " + next);
    }
    return next;
  }
}
