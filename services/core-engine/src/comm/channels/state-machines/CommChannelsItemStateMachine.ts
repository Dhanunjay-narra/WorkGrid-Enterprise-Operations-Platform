export type CommChannelsItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommChannelsItemStateMachine {
  private allowedTransitions: Record<CommChannelsItemState, CommChannelsItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommChannelsItemState, to: CommChannelsItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommChannelsItemState, to: CommChannelsItemState): CommChannelsItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommChannelsItem: " + from + " -> " + to);
    }
    return to;
  }
}
