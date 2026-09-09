export type CrmHealthEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmHealthEventStateMachine {
  private allowedTransitions: Record<CrmHealthEventState, CrmHealthEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmHealthEventState, to: CrmHealthEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmHealthEventState, to: CrmHealthEventState): CrmHealthEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmHealthEvent: " + from + " -> " + to);
    }
    return to;
  }
}
