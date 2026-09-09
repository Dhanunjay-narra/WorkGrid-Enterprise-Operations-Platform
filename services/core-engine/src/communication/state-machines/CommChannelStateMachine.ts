export type CommChannelState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class CommChannelStateMachine {
  private validTransitions: Record<CommChannelState, CommChannelState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: CommChannelState, next: CommChannelState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: CommChannelState, next: CommChannelState): CommChannelState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for CommChannel: from " + current + " to " + next);
    }
    return next;
  }
}
