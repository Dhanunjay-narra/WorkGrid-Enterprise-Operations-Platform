export type CrmDealsSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmDealsSummaryStateMachine {
  private allowedTransitions: Record<CrmDealsSummaryState, CrmDealsSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmDealsSummaryState, to: CrmDealsSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmDealsSummaryState, to: CrmDealsSummaryState): CrmDealsSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmDealsSummary: " + from + " -> " + to);
    }
    return to;
  }
}
