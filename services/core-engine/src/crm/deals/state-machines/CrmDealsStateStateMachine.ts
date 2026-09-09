export type CrmDealsStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmDealsStateStateMachine {
  private allowedTransitions: Record<CrmDealsStateState, CrmDealsStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmDealsStateState, to: CrmDealsStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmDealsStateState, to: CrmDealsStateState): CrmDealsStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmDealsState: " + from + " -> " + to);
    }
    return to;
  }
}
