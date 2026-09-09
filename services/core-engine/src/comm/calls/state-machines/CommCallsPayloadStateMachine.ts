export type CommCallsPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommCallsPayloadStateMachine {
  private allowedTransitions: Record<CommCallsPayloadState, CommCallsPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommCallsPayloadState, to: CommCallsPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommCallsPayloadState, to: CommCallsPayloadState): CommCallsPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommCallsPayload: " + from + " -> " + to);
    }
    return to;
  }
}
