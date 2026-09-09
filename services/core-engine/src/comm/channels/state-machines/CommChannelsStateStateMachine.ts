export type CommChannelsStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommChannelsStateStateMachine {
  private allowedTransitions: Record<CommChannelsStateState, CommChannelsStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommChannelsStateState, to: CommChannelsStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommChannelsStateState, to: CommChannelsStateState): CommChannelsStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommChannelsState: " + from + " -> " + to);
    }
    return to;
  }
}
