export type DocAccessLogState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class DocAccessLogStateMachine {
  private validTransitions: Record<DocAccessLogState, DocAccessLogState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: DocAccessLogState, next: DocAccessLogState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: DocAccessLogState, next: DocAccessLogState): DocAccessLogState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for DocAccessLog: from " + current + " to " + next);
    }
    return next;
  }
}
