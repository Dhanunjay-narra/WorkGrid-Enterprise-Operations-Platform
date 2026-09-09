export type CrmDealsSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmDealsSessionStateMachine {
  private allowedTransitions: Record<CrmDealsSessionState, CrmDealsSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmDealsSessionState, to: CrmDealsSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmDealsSessionState, to: CrmDealsSessionState): CrmDealsSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmDealsSession: " + from + " -> " + to);
    }
    return to;
  }
}
