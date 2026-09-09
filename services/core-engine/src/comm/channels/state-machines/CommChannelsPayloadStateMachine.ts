export type CommChannelsPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommChannelsPayloadStateMachine {
  private allowedTransitions: Record<CommChannelsPayloadState, CommChannelsPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommChannelsPayloadState, to: CommChannelsPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommChannelsPayloadState, to: CommChannelsPayloadState): CommChannelsPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommChannelsPayload: " + from + " -> " + to);
    }
    return to;
  }
}
