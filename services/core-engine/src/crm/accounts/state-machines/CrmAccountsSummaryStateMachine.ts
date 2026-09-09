export type CrmAccountsSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmAccountsSummaryStateMachine {
  private allowedTransitions: Record<CrmAccountsSummaryState, CrmAccountsSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmAccountsSummaryState, to: CrmAccountsSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmAccountsSummaryState, to: CrmAccountsSummaryState): CrmAccountsSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmAccountsSummary: " + from + " -> " + to);
    }
    return to;
  }
}
