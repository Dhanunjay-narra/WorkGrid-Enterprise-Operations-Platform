export type CommChannelMemberState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class CommChannelMemberStateMachine {
  private validTransitions: Record<CommChannelMemberState, CommChannelMemberState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: CommChannelMemberState, next: CommChannelMemberState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: CommChannelMemberState, next: CommChannelMemberState): CommChannelMemberState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for CommChannelMember: from " + current + " to " + next);
    }
    return next;
  }
}
