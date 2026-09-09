export type CommChannelsMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommChannelsMappingStateMachine {
  private allowedTransitions: Record<CommChannelsMappingState, CommChannelsMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommChannelsMappingState, to: CommChannelsMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommChannelsMappingState, to: CommChannelsMappingState): CommChannelsMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommChannelsMapping: " + from + " -> " + to);
    }
    return to;
  }
}
