export type CommChannelsSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommChannelsSummaryStateMachine {
  private allowedTransitions: Record<CommChannelsSummaryState, CommChannelsSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommChannelsSummaryState, to: CommChannelsSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommChannelsSummaryState, to: CommChannelsSummaryState): CommChannelsSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommChannelsSummary: " + from + " -> " + to);
    }
    return to;
  }
}
