export type CrmHealthStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmHealthStateStateMachine {
  private allowedTransitions: Record<CrmHealthStateState, CrmHealthStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmHealthStateState, to: CrmHealthStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmHealthStateState, to: CrmHealthStateState): CrmHealthStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmHealthState: " + from + " -> " + to);
    }
    return to;
  }
}
