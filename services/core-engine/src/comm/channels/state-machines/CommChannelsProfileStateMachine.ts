export type CommChannelsProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommChannelsProfileStateMachine {
  private allowedTransitions: Record<CommChannelsProfileState, CommChannelsProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommChannelsProfileState, to: CommChannelsProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommChannelsProfileState, to: CommChannelsProfileState): CommChannelsProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommChannelsProfile: " + from + " -> " + to);
    }
    return to;
  }
}
