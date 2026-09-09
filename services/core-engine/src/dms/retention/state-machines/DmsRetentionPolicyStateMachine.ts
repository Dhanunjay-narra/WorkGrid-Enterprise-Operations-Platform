export type DmsRetentionPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsRetentionPolicyStateMachine {
  private allowedTransitions: Record<DmsRetentionPolicyState, DmsRetentionPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsRetentionPolicyState, to: DmsRetentionPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsRetentionPolicyState, to: DmsRetentionPolicyState): DmsRetentionPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsRetentionPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
