export type CommChannelsThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommChannelsThresholdStateMachine {
  private allowedTransitions: Record<CommChannelsThresholdState, CommChannelsThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommChannelsThresholdState, to: CommChannelsThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommChannelsThresholdState, to: CommChannelsThresholdState): CommChannelsThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommChannelsThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
