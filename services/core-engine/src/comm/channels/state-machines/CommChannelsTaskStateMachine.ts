export type CommChannelsTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommChannelsTaskStateMachine {
  private allowedTransitions: Record<CommChannelsTaskState, CommChannelsTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommChannelsTaskState, to: CommChannelsTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommChannelsTaskState, to: CommChannelsTaskState): CommChannelsTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommChannelsTask: " + from + " -> " + to);
    }
    return to;
  }
}
