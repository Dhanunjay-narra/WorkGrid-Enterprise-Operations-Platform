export type CrmDealsEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmDealsEventStateMachine {
  private allowedTransitions: Record<CrmDealsEventState, CrmDealsEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmDealsEventState, to: CrmDealsEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmDealsEventState, to: CrmDealsEventState): CrmDealsEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmDealsEvent: " + from + " -> " + to);
    }
    return to;
  }
}
