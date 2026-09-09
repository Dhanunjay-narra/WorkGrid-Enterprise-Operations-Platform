export type CommChannelsSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommChannelsSessionStateMachine {
  private allowedTransitions: Record<CommChannelsSessionState, CommChannelsSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommChannelsSessionState, to: CommChannelsSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommChannelsSessionState, to: CommChannelsSessionState): CommChannelsSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommChannelsSession: " + from + " -> " + to);
    }
    return to;
  }
}
