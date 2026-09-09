export type CommChannelsQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommChannelsQueueStateMachine {
  private allowedTransitions: Record<CommChannelsQueueState, CommChannelsQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommChannelsQueueState, to: CommChannelsQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommChannelsQueueState, to: CommChannelsQueueState): CommChannelsQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommChannelsQueue: " + from + " -> " + to);
    }
    return to;
  }
}
