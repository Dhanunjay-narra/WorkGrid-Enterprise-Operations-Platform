export type CrmContactsSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmContactsSummaryStateMachine {
  private allowedTransitions: Record<CrmContactsSummaryState, CrmContactsSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmContactsSummaryState, to: CrmContactsSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmContactsSummaryState, to: CrmContactsSummaryState): CrmContactsSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmContactsSummary: " + from + " -> " + to);
    }
    return to;
  }
}
