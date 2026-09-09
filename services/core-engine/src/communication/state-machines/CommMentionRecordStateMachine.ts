export type CommMentionRecordState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class CommMentionRecordStateMachine {
  private validTransitions: Record<CommMentionRecordState, CommMentionRecordState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: CommMentionRecordState, next: CommMentionRecordState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: CommMentionRecordState, next: CommMentionRecordState): CommMentionRecordState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for CommMentionRecord: from " + current + " to " + next);
    }
    return next;
  }
}
