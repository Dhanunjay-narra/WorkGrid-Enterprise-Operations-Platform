export type CrmContactsPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmContactsPolicyStateMachine {
  private allowedTransitions: Record<CrmContactsPolicyState, CrmContactsPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmContactsPolicyState, to: CrmContactsPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmContactsPolicyState, to: CrmContactsPolicyState): CrmContactsPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmContactsPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
