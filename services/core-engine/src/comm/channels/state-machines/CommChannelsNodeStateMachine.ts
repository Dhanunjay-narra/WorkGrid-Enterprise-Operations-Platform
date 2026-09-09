export type CommChannelsNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommChannelsNodeStateMachine {
  private allowedTransitions: Record<CommChannelsNodeState, CommChannelsNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommChannelsNodeState, to: CommChannelsNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommChannelsNodeState, to: CommChannelsNodeState): CommChannelsNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommChannelsNode: " + from + " -> " + to);
    }
    return to;
  }
}
