export type CrmDealsPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmDealsPolicyStateMachine {
  private allowedTransitions: Record<CrmDealsPolicyState, CrmDealsPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmDealsPolicyState, to: CrmDealsPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmDealsPolicyState, to: CrmDealsPolicyState): CrmDealsPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmDealsPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
