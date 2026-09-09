export type CommChannelsBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommChannelsBatchStateMachine {
  private allowedTransitions: Record<CommChannelsBatchState, CommChannelsBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommChannelsBatchState, to: CommChannelsBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommChannelsBatchState, to: CommChannelsBatchState): CommChannelsBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommChannelsBatch: " + from + " -> " + to);
    }
    return to;
  }
}
