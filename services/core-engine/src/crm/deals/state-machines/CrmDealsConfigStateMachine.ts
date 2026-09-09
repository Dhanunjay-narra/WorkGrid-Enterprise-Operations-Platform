export type CrmDealsConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmDealsConfigStateMachine {
  private allowedTransitions: Record<CrmDealsConfigState, CrmDealsConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmDealsConfigState, to: CrmDealsConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmDealsConfigState, to: CrmDealsConfigState): CrmDealsConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmDealsConfig: " + from + " -> " + to);
    }
    return to;
  }
}
