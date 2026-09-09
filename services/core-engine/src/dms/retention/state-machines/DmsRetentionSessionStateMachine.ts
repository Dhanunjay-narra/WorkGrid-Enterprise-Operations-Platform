export type DmsRetentionSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsRetentionSessionStateMachine {
  private allowedTransitions: Record<DmsRetentionSessionState, DmsRetentionSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsRetentionSessionState, to: DmsRetentionSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsRetentionSessionState, to: DmsRetentionSessionState): DmsRetentionSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsRetentionSession: " + from + " -> " + to);
    }
    return to;
  }
}
