export type DmsRetentionPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsRetentionPayloadStateMachine {
  private allowedTransitions: Record<DmsRetentionPayloadState, DmsRetentionPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsRetentionPayloadState, to: DmsRetentionPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsRetentionPayloadState, to: DmsRetentionPayloadState): DmsRetentionPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsRetentionPayload: " + from + " -> " + to);
    }
    return to;
  }
}
