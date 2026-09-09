export type CrmAccountsPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmAccountsPolicyStateMachine {
  private allowedTransitions: Record<CrmAccountsPolicyState, CrmAccountsPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmAccountsPolicyState, to: CrmAccountsPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmAccountsPolicyState, to: CrmAccountsPolicyState): CrmAccountsPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmAccountsPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
