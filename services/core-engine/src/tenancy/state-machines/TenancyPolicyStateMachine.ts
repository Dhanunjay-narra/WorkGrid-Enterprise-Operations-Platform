export type TenancyPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class TenancyPolicyStateMachine {
  private allowedTransitions: Record<TenancyPolicyState, TenancyPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: TenancyPolicyState, to: TenancyPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: TenancyPolicyState, to: TenancyPolicyState): TenancyPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for TenancyPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
