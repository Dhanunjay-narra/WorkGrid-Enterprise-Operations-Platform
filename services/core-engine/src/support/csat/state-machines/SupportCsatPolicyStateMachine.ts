export type SupportCsatPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportCsatPolicyStateMachine {
  private allowedTransitions: Record<SupportCsatPolicyState, SupportCsatPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportCsatPolicyState, to: SupportCsatPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportCsatPolicyState, to: SupportCsatPolicyState): SupportCsatPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportCsatPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
