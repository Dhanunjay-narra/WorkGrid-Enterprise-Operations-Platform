export type CommChannelsPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommChannelsPolicyStateMachine {
  private allowedTransitions: Record<CommChannelsPolicyState, CommChannelsPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommChannelsPolicyState, to: CommChannelsPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommChannelsPolicyState, to: CommChannelsPolicyState): CommChannelsPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommChannelsPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
