export type CrmTerritorySummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmTerritorySummaryStateMachine {
  private allowedTransitions: Record<CrmTerritorySummaryState, CrmTerritorySummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmTerritorySummaryState, to: CrmTerritorySummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmTerritorySummaryState, to: CrmTerritorySummaryState): CrmTerritorySummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmTerritorySummary: " + from + " -> " + to);
    }
    return to;
  }
}
